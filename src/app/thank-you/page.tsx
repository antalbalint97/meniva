// app/thank-you/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thank you | Meniva",
  robots: { index: false, follow: false }, // keep this page out of search
};

export default function ThankYouPage() {
  return (
    <>
      {/* Fire GA4 events when the page loads */}
      <Script id="ga4-thankyou" strategy="afterInteractive">
        {`
          if (window.gtag) {
            // page-specific event (mark as conversion in GA4)
            gtag('event', 'thank_you_view', { page_path: '/thank-you' });
            // lead event (also mark as conversion)
            gtag('event', 'generate_lead', {
              method: 'contact_form',
              form_id: 'contact'
            });
          }
        `}
      </Script>

      <main className="min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold mb-4">Thanks! We got your message.</h1>
          <p className="text-gray-600 mb-8">
            We’ll get back to you shortly. In the meantime, feel free to explore our services
            or read our latest insights.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/#services"
              className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-md
                         hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-[#1E9EB8]/40 transition"
            >
              Explore Services
            </Link>
            <Link
              href="/blog"
              className="inline-block border-2 border-[#1E9EB8] text-[#1E9EB8] font-semibold
                         px-6 py-3 rounded-md hover:bg-[#1E9EB8] hover:text-black
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E9EB8]/40 transition"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
