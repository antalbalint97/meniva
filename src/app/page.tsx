'use client';

import Script from 'next/script';
import Hero from '@/components/Hero';
import ImpactMetrics from '@/components/ImpactMetrics';
import ServicesGrid from '@/components/ServicesGrid';
import TechTabs from '@/components/TechTabs';
import DemoShowcase from '@/components/DemoShowcase';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import { Card, CardContent } from '@/components/ui/Card';

const faqs = [
  {
    question: 'Who are your typical clients?',
    answer:
      'We primarily work with SMEs and scale-ups across Europe that have outgrown spreadsheets but don\u2019t yet need a full in-house data team. Industries include e-commerce, logistics, SaaS, retail, and professional services.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Most engagements run 2\u20136 weeks. A focused BI dashboard or automation project can be delivered in as little as 2 weeks. Larger ML or custom tool projects typically take 4\u20136 weeks.',
  },
  {
    question: 'What does the process look like?',
    answer:
      'We start with a free discovery call to understand your data challenges. Then we deliver a clear scope and proposal. Once approved, we work in focused iterations with weekly check-ins and deliver production-ready systems.',
  },
  {
    question: 'Do you work with our existing tools?',
    answer:
      'Yes. We integrate with whatever stack you already use \u2014 Power BI, Tableau, AWS, Azure, Google Cloud, Snowflake, dbt, Airflow, and more. We adapt to your environment rather than forcing a new one.',
  },
  {
    question: 'What happens after delivery?',
    answer:
      'We provide documentation, training, and optional ongoing support. Our goal is to make your team self-sufficient. If you need continued help, we offer flexible retainer arrangements.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing depends on scope and complexity. Most engagements range from \u20AC3,000 to \u20AC15,000. We always provide a fixed-price proposal after the discovery call \u2014 no surprises.',
  },
];

export default function Home() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Meniva',
    url: 'https://meniva.net',
    logo: 'https://meniva.net/logo-meniva.png',
    description:
      'Meniva helps SMEs in Europe with data strategy, BI dashboards, and AI systems.',
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
        name: 'Data Foundations & Analytics',
        description: 'Data strategy, architecture, KPI frameworks, and BI dashboards.',
      },
      {
        '@type': 'Service',
        name: 'BI & Executive Dashboards',
        description: 'Interactive dashboards and self-service analytics.',
      },
      {
        '@type': 'Service',
        name: 'ML & Forecasting',
        description: 'Forecasting, ML models, churn prediction, and MLOps.',
      },
      {
        '@type': 'Service',
        name: 'AI Automation & Agentic Systems',
        description: 'LLM agents, automated workflows, and custom internal tools.',
      },
    ],
  };

  return (
    <>
      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgJsonLd)}
      </Script>

      <main className="min-h-screen scroll-smooth bg-[#FAFBFC] font-sans text-foreground">
        {/* A) Hero */}
        <Hero />

        {/* B) Impact Metrics */}
        <section className="py-12 lg:py-16">
          <ImpactMetrics />
        </section>

        {/* C) Services */}
        <section id="services" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <ServicesGrid />
          </div>
        </section>

        {/* D) Demos */}
        <section id="demos" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <DemoShowcase />
          </div>
        </section>

        {/* E) Technologies */}
        <section className="scroll-mt-28 py-16 lg:py-24">
          <div className="section-container">
            <TechTabs />
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="scroll-mt-28 py-16 lg:py-20">
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
                      {"Why SMEs in Europe Can\u2019t Ignore Data Strategy in 2025"}
                    </h3>
                    <p className="body-sm text-muted-foreground">
                      Data is no longer optional — it{"'"}s a requirement for growth.
                      Learn how SMEs can stay competitive with the right strategy.
                    </p>
                    <span className="mt-1 text-sm font-medium text-brand">
                      {"Read more \u2192"}
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
                      Stay tuned for upcoming articles about business intelligence,
                      AI adoption, and practical data strategies for SMEs.
                    </p>
                    <span className="mt-1 text-sm font-medium text-brand">
                      {"Read more \u2192"}
                    </span>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* F) Contact */}
        <section id="contact" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <ContactSection />
          </div>
        </section>

        {/* G) FAQ */}
        <section id="faq" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <FAQ faqs={faqs} injectJsonLd trackView />
          </div>
        </section>
      </main>
    </>
  );
}
