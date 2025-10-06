'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Script from 'next/script';
import { gtagEvent } from '@/components/GA'; // centralized analytics helper

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  injectJsonLd?: boolean;
  jsonLdId?: string;
  trackView?: boolean;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
  injectJsonLd = false,
  jsonLdId = 'faq-jsonld-component',
  trackView = true,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewedRef = useRef(false);

  // Build stable ids for deep links & a11y
  const ids = useMemo(
    () => faqs.map((f, i) => `faq-${slugify(f.question) || `q-${i + 1}`}`),
    [faqs]
  );

  // Optional JSON-LD
  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    }),
    [faqs]
  );

  // Open FAQ if deep-linked
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (!hash) return;
    const index = ids.findIndex((id) => id === hash);
    if (index >= 0) {
      setOpenIndex(index);
      gtagEvent('faq_question_open', {
        faq_question: faqs[index].question,
        faq_index: index + 1,
        method: 'deeplink',
        location: 'faq_section',
      });
      document.getElementById(ids[index])?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ids, faqs]);

  // One-time "view" event when section visible
  useEffect(() => {
    if (!trackView || viewedRef.current || typeof window === 'undefined') return;
    const el = sectionRef.current;
    if (!el || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && entry.intersectionRatio > 0.4) {
          viewedRef.current = true;
          gtagEvent('faq_section_view', {
            section_id: 'faq',
            question_name: faqs.map(f => f.question).join(', '), // Return question names for analytics context
          });
          io.disconnect();
        }
      },
      { threshold: [0.4] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [faqs.length, trackView]);

  const toggle = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    const question = faqs[index].question;
    const params = {
      faq_question: question,
      faq_index: index + 1,
      method: 'accordion',
      location: 'faq_section',
    };

    if (isOpening) {
      const id = ids[index];
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.hash = id;
        window.history.replaceState(null, '', url.toString());
      }
      gtagEvent('faq_question_open', params);
    } else {
      gtagEvent('faq_question_close', params);
    }
  };

  return (
    <section id="faq" ref={sectionRef} className="scroll-mt-28 px-6 md:px-20 py-20">
      {injectJsonLd && (
        <Script id={jsonLdId} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      )}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const id = ids[index];
            const isOpen = openIndex === index;
            const panelId = `${id}-panel`;
            return (
              <div key={id} id={id} className="border-b pb-2">
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex justify-between w-full text-left text-lg font-semibold hover:text-black focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={id}
                    className="mt-2 text-gray-600"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
