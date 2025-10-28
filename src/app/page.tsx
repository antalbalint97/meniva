'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import ServicesFlow from '../components/ServicesFlow';
import AnimatedCredo from '../components/AnimatedCredo';
import FAQ from '../components/FAQ';
import ConsentBanner from "../components/ConsentBanner";
import Image from "next/image";

const NAV_HEIGHT = 72; // px

const ScrollDown = ({ target = "#services" }: { target: string }) => (
  <a
    href={target}
    aria-label="Scroll down"
    data-gtag="cta"
    data-cta="scroll_down"
    data-location="hero"
    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition animate-bounce motion-reduce:animate-none"
  >
    <svg
      className="w-6 h-6 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
);

export default function Home() {
  const [stripHeight, setStripHeight] = useState(0);

  // Dynamically measure campaign strip height
  useEffect(() => {
    const strip = document.getElementById("campaign-strip");
    if (!strip) return;

    const updateHeight = () => setStripHeight(strip.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(strip);

    return () => observer.disconnect();
  }, []);

  // FAQ data
  const faqs = [
    {
      question: "What does Meniva do?",
      answer:
        "Meniva helps SMEs in Europe design data strategies, build BI dashboards, and implement AI agentic systems tailored to their needs.",
    },
    {
      question: "Who are your clients?",
      answer:
        "We work with small and medium-sized enterprises across Europe that want clarity from their data and practical AI adoption strategies.",
    },
    {
      question: "How do I start working with Meniva?",
      answer:
        "Simply contact us via our form or book a consultation call. We’ll assess your current data maturity and propose a roadmap.",
    },
    {
      question: "Do I need a big budget to start with AI?",
      answer:
        "Not at all. We specialize in phased approaches for SMEs, starting small with safe pilots before scaling to larger systems.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Depending on scope: Insight Phase ~2–3 weeks, Blueprint Phase ~4 weeks, Engine Phase 2–3 months.",
    },
    {
      question: "Do you provide training for teams?",
      answer:
        "Yes. We run workshops so your team can use BI tools and AI systems confidently.",
    },
  ];

  // JSON-LD payloads
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Meniva",
    url: "https://meniva.net",
    logo: "https://meniva.net/logo-meniva.png",
    description:
      "Meniva helps SMEs in Europe with data strategy, BI dashboards, and AI agentic systems.",
    sameAs: [
      "https://linkedin.com/company/meniva-data",
      "https://facebook.com/menivadata",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Budapest",
      addressCountry: "Hungary",
    },
    serviceOffered: [
      {
        "@type": "Service",
        name: "Data Strategy",
        description:
          "Helping SMEs design scalable data strategies that support growth.",
      },
      {
        "@type": "Service",
        name: "Business Intelligence Dashboards",
        description:
          "Building custom BI dashboards for clarity in decision-making.",
      },
      {
        "@type": "Service",
        name: "AI Agentic Systems",
        description:
          "Practical, safe implementation of AI agents tailored for SMEs.",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
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
      
      <main className="min-h-screen bg-white text-black font-sans scroll-smooth scroll-p-28">
        {/* Hero */}
        <section
          className="relative flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 sm:px-6 lg:px-8 gap-10"
          style={{ minHeight: `calc(100vh - ${NAV_HEIGHT}px)` }}
        >
          {/* Left text */}
          <div className="flex-1">
            <h1 className="font-extrabold leading-tight tracking-tight text-[clamp(2rem,5.5vw,4.5rem)]">
              <span className="block">Meaningful Data</span>
              <span className="block">
                Meaningful <span className="text-[#1E9EB8]">Growth</span>
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-[60ch] mx-auto lg:mx-0 text-[clamp(1rem,1.25vw,1.25rem)]">
              From raw data to custom tools and business systems, Meniva delivers
              end-to-end solutions that turn complexity into clarity and action.
              We help SMEs across Europe implement business intelligence and AI strategies that work.
            </p>

            <div className="mt-8">
              <a
                href="#services"
                data-gtag="cta"
                data-cta="explore_services"
                data-location="hero"
                className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition text-[clamp(0.95rem,1vw,1.125rem)]"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center mt-8 md:mt-0 flex-1">
            <Image
              src="/meniva_website_logo_final_v2.png"
              alt="AI brain graphic"
              width={640}
              height={640}
              priority
              sizes="(max-width: 1024px) 80vw, 560px"
              className="h-auto w-[80vw] max-w-[800px] md:w-[800px] object-contain"
            />
          </div>
                    
        </section>


        {/* Services */}
        <section id="services" className="scroll-mt-28 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesFlow />
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 py-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
            <AnimatedCredo />
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="scroll-mt-28 py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Latest Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <a
                href="/blog/sme-data-strategy-2025"
                data-gtag="cta"
                data-cta="blog_click"
                data-location="blog_section"
                data-item="sme_data_strategy_2025"
                className="block border rounded-lg p-6 hover:shadow-lg transition bg-white"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  Why SMEs in Europe Can’t Ignore Data Strategy in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Data is no longer optional — it’s a requirement for growth. Learn how
                  SMEs can stay competitive with the right strategy...
                </p>
                <span className="text-[#1E9EB8] font-medium hover:underline">
                  Read more →
                </span>
              </a>

              <a
                href="/blog/coming-soon"
                data-gtag="cta"
                data-cta="blog_click"
                data-location="blog_section"
                data-item="coming_soon"
                className="block border rounded-lg p-6 hover:shadow-lg transition bg-white"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  Coming Soon: More Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay tuned for upcoming articles about business intelligence, AI
                  adoption, and practical data strategies for SMEs.
                </p>
                <span className="text-[#1E9EB8] font-medium hover:underline">
                  Read more →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 bg-gray-50 py-40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const start = performance.now();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);

                const body = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                };

                try {
                  (window as any).gtag?.("event", "contact_form_start", {
                    form_id: "contact",
                    method: "contact_form",
                  });

                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                  });

                  if (res.ok) {
                    (window as any).gtag?.("event", "generate_lead", {
                      method: "contact_form",
                      form_id: "contact",
                      time_to_submit_ms: Math.round(performance.now() - start),
                    });
                    setTimeout(() => {
                      window.location.href = "/thank-you";
                    }, 150);
                  } else {
                    (window as any).gtag?.("event", "contact_form_error", {
                      form_id: "contact",
                      method: "contact_form",
                      error_type: "server_error",
                    });
                    alert("Something went wrong. Please try again later.");
                  }
                } catch (err) {
                  console.error("Contact form error:", err);
                  (window as any).gtag?.("event", "contact_form_error", {
                    form_id: "contact",
                    method: "contact_form",
                    error_type: "network_error",
                  });
                  alert("Failed to send message. Please try again later.");
                }
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  data-gtag="cta"
                  data-cta="contact_form_submit"
                  data-location="contact_section"
                  className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={faqs} />
      </main>
    </>
  );
}
