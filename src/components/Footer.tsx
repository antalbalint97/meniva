"use client";

import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function Footer({ locale }: { locale?: string }) {
  const currentLocale = locale ?? "en";
  const t = useDictionary();

  const handleResetConsent = () => {
    localStorage.removeItem("consent");
    window.dispatchEvent(new Event("showConsentBanner"));
    (window as any).gtag?.("event", "cookie_settings_open", {
      location: "footer",
    });
  };

  return (
    <footer className="border-t border-border bg-white">
      <div className="section-container-wide flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        {/* Left */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-foreground">
            {t.common.meniva}
          </p>
          <p className="mt-1 body-sm text-muted-foreground">
            {t.footer.tagline}
          </p>

          <div className="mt-4 flex flex-col gap-1">
            <Link
              href={`/${currentLocale}/privacy`}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {t.footer.privacyPolicy}
            </Link>
            <button
              onClick={handleResetConsent}
              className="text-left text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {t.footer.cookieSettings}
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="md:text-right">
          <a
            href="mailto:info@meniva.net"
            className="text-sm font-medium text-foreground hover:text-brand"
          >
            info@meniva.net
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.footer.location}
          </p>

          <div className="mt-4 flex gap-4 md:justify-end">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/meniva-data"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-gtag="outbound"
              data-location="footer"
              className="text-muted-foreground transition hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.2 2.3-2.4 4.7-2.4 5 0 5.9 3.3 5.9 7.7V24h-5v-7.3c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4V24h-5V8z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/menivadata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              data-gtag="outbound"
              data-location="footer"
              className="text-muted-foreground transition hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.69v-3.622h3.131V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
