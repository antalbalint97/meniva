'use client';

import FAQ from '@/components/FAQ';

const faqs = [
  {
    question: 'What does Meniva do?',
    answer:
      'Meniva helps SMEs in Europe design data strategies, build BI dashboards, and implement AI systems tailored to their needs.',
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
      'Depending on scope: discovery phase ~2-3 weeks, architecture phase ~4 weeks, implementation 2-3 months.',
  },
  {
    question: 'Do you provide training for teams?',
    answer:
      'Yes. We run workshops so your team can use BI tools and AI systems confidently.',
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F2FAFB] via-[#FAFBFC] to-[#FAFBFC] font-sans text-foreground">
      <div className="section-container section-padding">
        <FAQ faqs={faqs} injectJsonLd trackView />
      </div>
    </main>
  );
}
