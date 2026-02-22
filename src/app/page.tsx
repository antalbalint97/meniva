'use client';

import Script from 'next/script';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import TechStack from '@/components/TechStack';
import DemoShowcase from '@/components/DemoShowcase';
import WhyMeniva from '@/components/WhyMeniva';
import ContactSection from '@/components/ContactSection';
import { Card, CardContent } from '@/components/ui/Card';

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
        description:
          'Data strategy, architecture, KPI frameworks, and BI dashboards.',
      },
      {
        '@type': 'Service',
        name: 'Data Engineering & Automation',
        description:
          'ETL/ELT pipelines, data warehouses, and workflow orchestration.',
      },
      {
        '@type': 'Service',
        name: 'Machine Learning & AI Systems',
        description:
          'Forecasting, ML models, LLM agents, and MLOps pipelines.',
      },
      {
        '@type': 'Service',
        name: 'Custom Internal Tools & Products',
        description:
          'Internal dashboards, Streamlit apps, and productized software.',
      },
    ],
  };

  return (
    <>
      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgJsonLd)}
      </Script>

      <main className="min-h-screen scroll-smooth bg-gradient-to-b from-[#F2FAFB] via-[#FAFBFC] to-[#FAFBFC] font-sans text-foreground">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <section id="services" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <ServicesGrid />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="scroll-mt-28 py-16 lg:py-20">
          <div className="section-container">
            <TechStack />
          </div>
        </section>

        {/* Demos */}
        <section id="demos" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <DemoShowcase />
          </div>
        </section>

        {/* Why Meniva */}
        <section className="scroll-mt-28 py-16 lg:py-24">
          <div className="section-container">
            <WhyMeniva />
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
                      {"Why SMEs in Europe Can't Ignore Data Strategy in 2025"}
                    </h3>
                    <p className="body-sm text-muted-foreground">
                      Data is no longer optional -- it{"'"}s a requirement for growth. Learn
                      how SMEs can stay competitive with the right strategy.
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
                      Stay tuned for upcoming articles about business intelligence, AI
                      adoption, and practical data strategies for SMEs.
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

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 section-padding">
          <div className="section-container">
            <ContactSection />
          </div>
        </section>
      </main>
    </>
  );
}
