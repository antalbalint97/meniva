import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import GA from "@/components/GA";
import ConsentBanner from "@/components/ConsentBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/locales";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const base = "https://meniva.net";

  return {
    title: "Meniva | Data Strategy, BI & AI Solutions for SMEs in Europe",
    description:
      "Meniva helps SMEs in Europe transform raw data into business growth. We specialize in data strategy, BI dashboards, and AI agentic systems for small and mid-sized companies.",
    alternates: {
      canonical: `${base}/${safeLocale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}`])
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* hreflang alternates */}
        {locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://meniva.net/${l}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://meniva.net/${defaultLocale}`}
        />

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
            gtag('consent', 'default', { analytics_storage: 'denied' });
            var consent = localStorage.getItem('consent');
            if (consent === 'analytics') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
            var isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
            var config = { page_path: window.location.pathname };
            if (isLocal) config.debug_mode = true;
            gtag('config', 'G-FE1M458W4C', config);
          `}
        </Script>

        {/* ---------- CTA & Outbound Link Tracking ---------- */}
        <Script id="ga4-link-tracking" strategy="afterInteractive">
          {`
            (function(){
              if (!window || typeof window.addEventListener !== 'function') return;
              var lastHref = '';
              var lastTs = 0;
              document.addEventListener('click', function(e){
                var t = e.target;
                if (!t || !t.closest) return;
                var el = t.closest('a, button, [data-gtag]');
                if (!el || typeof window.gtag !== 'function') return;
                var href = el.getAttribute('href') || '';
                var domain = (el.hostname || '').replace(/^www\\\\./,'');
                var locationName = el.getAttribute('data-location') || 'unknown';
                var ts = Date.now();
                if (href === lastHref && ts - lastTs < 800) return;
                lastHref = href; lastTs = ts;
                if (el.hasAttribute('data-gtag') && el.getAttribute('data-gtag') === 'cta') {
                  var ctaName = el.getAttribute('data-cta') || 'unknown_cta';
                  window.gtag('event', 'cta_click', { cta_name: ctaName, location: locationName });
                  return;
                }
                var isAnchor = el.tagName.toLowerCase() === 'a';
                var sameHost = isAnchor && el.hostname === window.location.hostname;
                if (isAnchor && !sameHost) {
                  var linkText = (el.textContent || '').trim().substring(0,80);
                  var sameTab = !el.target || el.target === '_self';
                  var eventParams = { link_url: href, link_domain: domain, link_text: linkText, location: locationName, transport_type: 'beacon' };
                  if (sameTab) {
                    e.preventDefault();
                    window.gtag('event', 'outbound_click_custom', Object.assign({}, eventParams, { event_callback: function(){ document.location.href = href; } }));
                    setTimeout(function(){ document.location.href = href; }, 300);
                  } else {
                    window.gtag('event', 'outbound_click_custom', eventParams);
                  }
                }
              }, true);
            })();
          `}
        </Script>

        {/* ---------- Microsoft Clarity ---------- */}
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
        <Suspense fallback={null}>
          <GA />
        </Suspense>
        <ConsentBanner />
        <Navbar locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
