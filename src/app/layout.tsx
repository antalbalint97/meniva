import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GA from "@/components/GA";
import ConsentBanner from "@/components/ConsentBanner";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meniva | Data Strategy, BI & AI Solutions for SMEs in Europe",
  description:
    "Meniva helps SMEs in Europe transform raw data into business growth. We specialize in data strategy, BI dashboards, and AI agentic systems for small and mid-sized companies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ---------- Google Analytics 4 ---------- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FE1M458W4C"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Default consent: analytics denied until user accepts
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });

            // Restore saved consent
            const consent = localStorage.getItem('consent');
            if (consent === 'analytics') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }

            // Initial GA4 configuration
            const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
            const config = { page_path: window.location.pathname };
            if (isLocal) config.debug_mode = true;

            gtag('config', 'G-FE1M458W4C', config);
          `}
        </Script>

        {/* ---------- CTA & Outbound Link Tracking ---------- */}
        <Script id="ga4-link-tracking" strategy="afterInteractive">
          {`
            (function(){
              if (!window || typeof window.addEventListener !== 'function') return;
              let lastHref = '';
              let lastTs = 0;

              document.addEventListener('click', function(e){
                const t = e.target;
                if (!t || !t.closest) return;
                const el = t.closest('a, button, [data-gtag]');
                if (!el || typeof window.gtag !== 'function') return;

                const href = el.getAttribute('href') || '';
                const domain = (el.hostname || '').replace(/^www\\./,'');
                const locationName = el.getAttribute('data-location') || 'unknown';
                const ts = Date.now();

                // Deduplicate double clicks
                if (href === lastHref && ts - lastTs < 800) return;
                lastHref = href; lastTs = ts;

                // ---- CTA tracking ----
                if (el.hasAttribute('data-gtag') && el.getAttribute('data-gtag') === 'cta') {
                  const ctaName = el.getAttribute('data-cta') || 'unknown_cta';
                  window.gtag('event', 'cta_click', {
                    cta_name: ctaName,
                    location: locationName
                  });
                  return;
                }

                // ---- Outbound link tracking ----
                const isAnchor = el.tagName.toLowerCase() === 'a';
                const sameHost = isAnchor && el.hostname === window.location.hostname;
                if (isAnchor && !sameHost) {
                  const linkText = (el.textContent || '').trim().substring(0,80);
                  const sameTab = !el.target || el.target === '_self';

                  const eventParams = {
                    link_url: href,
                    link_domain: domain,
                    link_text: linkText,
                    location: locationName,
                    transport_type: 'beacon'
                  };

                  if (sameTab) {
                    e.preventDefault();
                    window.gtag('event', 'outbound_click_custom', {
                      ...eventParams,
                      event_callback: function(){ document.location.href = href; }
                    });
                    setTimeout(function(){ document.location.href = href; }, 300);
                  } else {
                    window.gtag('event', 'outbound_click_custom', eventParams);
                  }
                }
              }, true);
            })();
          `}
        </Script>

        {/* ---------- Microsoft Clarity (only after consent) ---------- */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            if (localStorage.getItem('consent') === 'analytics') {
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ta4edlltm9");
            }
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {/* ---------- Global GA Page Tracking ---------- */}
        <Suspense fallback={null}>
          <GA />
        </Suspense>

        {/* ---------- Consent Banner ---------- */}
        <ConsentBanner />

        {/* ---------- Header ---------- */}
        <Navbar />

        {/* ---------- Main Content ---------- */}
        {children}

        {/* ---------- Footer ---------- */}
        <Footer />
      </body>
    </html>
  );
}
