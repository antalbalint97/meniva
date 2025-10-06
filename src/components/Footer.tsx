"use client";

import Link from "next/link";

export default function Footer() {
  const handleResetConsent = () => {
    localStorage.removeItem("consent");
    window.dispatchEvent(new Event("showConsentBanner"));

    // GA4 event
    (window as any).gtag?.('event', 'cookie_settings_open', {
      location: 'footer',
    });
  };

  return (
    <footer className="bg-neutral-900 text-gray-200 mt-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <Link href="/" aria-label="Meniva home" className="inline-block">
              <img
                src="/logo-meniva-kek.png"
                alt="Meniva logo - Data and AI consultancy"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              © {new Date().getFullYear()} Meniva — Turning complexity into clarity
            </p>
            <p className="mt-1">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white underline underline-offset-4"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="mt-1">
              <button
                onClick={handleResetConsent}
                className="text-sm text-gray-400 hover:text-white underline underline-offset-4"
              >
                Change cookie settings
              </button>
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-base font-semibold">Contact</h4>
            <a href="mailto:info@meniva.net" className="block mt-2 hover:text-white">
              info@meniva.net
            </a>
            <p className="text-sm text-gray-400">Budapest, Hungary</p>

            <div className="flex md:justify-end gap-5 mt-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/meniva-data"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-gtag="outbound"
                data-location="footer"
                className="hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                className="hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.69v-3.622h3.131V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
