'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Script from 'next/script';
import { gtagEvent } from '@/components/GA';

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

  const ids = useMemo(
    () => faqs.map((f, i) => `faq-${slugify(f.question) || `q-${i + 1}`}`),
    [faqs]
  );

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

  // One-time view event
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
            question_name: faqs.map((f) => f.question).join(', '),
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
    <section id="faq" ref={sectionRef} className="scroll-mt-28">
      {injectJsonLd && (
        <Script id={jsonLdId} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      )}

      <div className="text-center">
        <h2 className="heading-2 text-foreground">{title}</h2>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const id = ids[index];
            const isOpen = openIndex === index;
            const panelId = `${id}-panel`;

            return (
              <div
                key={id}
                id={id}
                className={`rounded-xl border transition-colors ${
                  isOpen ? 'border-brand/30 bg-brand-muted/40' : 'border-border bg-white'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-foreground transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 7.5l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={id}
                    className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground"
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
