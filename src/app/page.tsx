'use client';

import Script from 'next/script';
import Hero from '@/components/Hero';
import ServicesFlow from '@/components/ServicesFlow';
import DemoShowcase from '@/components/DemoShowcase';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import { Card, CardContent } from '@/components/ui/Card';

export default function Home() {
  // FAQ data
  const faqs = [
    {
      question: 'What does Meniva do?',
      answer:
        'Meniva helps SMEs in Europe design data strategies, build BI dashboards, and implement AI agentic systems tailored to their needs.',
    },
    {
      question: 'Who are your clients?',
      answer:
        'We work with small and medium-sized enterprises across Europe that want clarity from their data and practical AI adoption strategies.',
    },
    {
      question: 'How do I start working with Meniva?',
      answer:
        'Simply contact us via our form or book a consultation call. We\'ll assess your current data maturity and propose a roadmap.',
    },
    {
      question: 'Do I need a big budget to start with AI?',
      answer:
        'Not at all. We specialize in phased approaches for SMEs, starting small with safe pilots before scaling to larger systems.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Depending on scope: Insight Phase ~2-3 weeks, Blueprint Phase ~4 weeks, Engine Phase 2-3 months.',
    },
    {
      question: 'Do you provide training for teams?',
      answer:
        'Yes. We run workshops so your team can use BI tools and AI systems confidently.',
    },
  ];

  // JSON-LD payloads
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Meniva',
    url: 'https://meniva.net',
    logo: 'https://meniva.net/logo-meniva.png',
    description:
      'Meniva helps SMEs in Europe with data strategy, BI dashboards, and AI agentic systems.',
    sameAs: [
      'https://linkedin.com/company/meniva-data',
      'https://facebook.com/menivadata',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Budapest',
      addressCountry: 'Hungary',
    },
    serviceOffered: [
      {
        '@type': 'Service',
        name: 'Data Strategy',
        description:
          'Helping SMEs design scalable data strategies that support growth.',
      },
      {
        '@type': 'Service',
        name: 'Business Intelligence Dashboards',
        description:
          'Building custom BI dashboards for clarity in decision-making.',
      },
      {
        '@type': 'Service',
        name: 'AI Agentic Systems',
        description:
          'Practical, safe implementation of AI agents tailored for SMEs.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgJsonLd)}
      </Script>
      <Script id="faq-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <main className="min-h-screen scroll-smooth bg-gradient-to-b from-[#F2FAFB] via-background to-background font-sans text-foreground">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <section id="services" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <ServicesFlow />
          </div>
        </section>

        {/* Demos */}
        <section id="demos" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <DemoShowcase />
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="scroll-mt-28 py-14 lg:py-20">
          <div className="section-container">
            <div className="text-center">
              <h2 className="heading-2 text-foreground">Latest Insights</h2>
              <p className="body-lg mx-auto mt-2 max-w-[44ch] text-muted-foreground">
                Practical articles on data strategy and AI for SMEs.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
              <a
                href="/blog/sme-data-strategy-2025"
                data-gtag="cta"
                data-cta="blog_click"
                data-location="blog_section"
                data-item="sme_data_strategy_2025"
                className="group"
              >
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardContent className="flex flex-col gap-2">
                    <h3 className="heading-4 text-foreground group-hover:text-brand transition-colors">
                      {"Why SMEs in Europe Can't Ignore Data Strategy in 2025"}
                    </h3>
                    <p className="body-sm text-muted-foreground">
                      Data is no longer optional -- it{"'"}s a requirement for growth. Learn
                      how SMEs can stay competitive with the right strategy.
                    </p>
                    <span className="mt-1 text-sm font-medium text-brand">
                      Read more &rarr;
                    </span>
                  </CardContent>
                </Card>
              </a>

              <a
                href="/blog/coming-soon"
                data-gtag="cta"
                data-cta="blog_click"
                data-location="blog_section"
                data-item="coming_soon"
                className="group"
              >
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <CardContent className="flex flex-col gap-2">
                    <h3 className="heading-4 text-foreground group-hover:text-brand transition-colors">
                      Coming Soon: More Insights
                    </h3>
                    <p className="body-sm text-muted-foreground">
                      Stay tuned for upcoming articles about business intelligence, AI
                      adoption, and practical data strategies for SMEs.
                    </p>
                    <span className="mt-1 text-sm font-medium text-brand">
                      Read more &rarr;
                    </span>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <ContactSection />
          </div>
        </section>

        {/* FAQ */}
        <section className="scroll-mt-28 section-padding">
          <div className="section-container">
            <FAQ faqs={faqs} />
          </div>
        </section>
      </main>
    </>
  );
}
