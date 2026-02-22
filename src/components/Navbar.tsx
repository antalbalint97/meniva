"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { locales, type Locale } from "@/i18n/locales";

const links = [
  { label: "Services", hash: "#services" },
  { label: "Demos", hash: "#demos" },
  { label: "Blog", hash: "#blog" },
  { label: "Contact", hash: "#contact" },
  { label: "FAQ", hash: "#faq" },
];

export default function Navbar({ locale }: { locale?: string }) {
  const [open, setOpen] = useState(false);
  const currentLocale = (locale ?? "en") as Locale;
  const pathname = usePathname();

  /** Build the equivalent path for another locale */
  function switchedPath(target: Locale) {
    // pathname looks like /en/blog/foo or /hu
    const segments = pathname.split("/");
    segments[1] = target; // replace locale segment
    return segments.join("/") || `/${target}`;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white shadow-sm">
      <div className="section-container-wide flex items-center justify-between py-3">
        {/* Logo */}
        <Link href={`/${currentLocale}`} scroll aria-label="Meniva home">
          <Image
            src="/logo-meniva-kek.png"
            alt="Meniva logo - data and AI consultancy for SMEs"
            width={120}
            height={50}
            className="h-auto cursor-pointer"
            style={{ width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 text-sm font-medium md:flex"
          aria-label="Main navigation"
        >
          {links.map(({ label, hash }) => (
            <a
              key={hash}
              href={`/${currentLocale}/${hash}`}
              className="text-slate-700 transition hover:text-brand"
            >
              {label}
            </a>
          ))}

          <a
            href={`/${currentLocale}/#contact`}
            data-gtag="cta"
            data-cta="book_consultation"
            data-location="navbar"
          >
            <Button intent="accent" size="md">
              Book a Free Consultation
            </Button>
          </a>

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2 text-xs font-semibold">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchedPath(l)}
                className={`px-2 py-1 rounded transition ${
                  l === currentLocale
                    ? "bg-brand text-white"
                    : "text-slate-500 hover:text-brand"
                }`}
                aria-label={`Switch to ${l === "en" ? "English" : "Hungarian"}`}
                aria-current={l === currentLocale ? "true" : undefined}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          className="border-t border-slate-200/60 bg-white px-6 pb-6 pt-4 shadow-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {links.map(({ label, hash }) => (
              <a
                key={hash}
                href={`/${currentLocale}/${hash}`}
                onClick={() => setOpen(false)}
                className="text-base text-slate-700 transition hover:text-brand"
              >
                {label}
              </a>
            ))}

            <a
              href={`/${currentLocale}/#contact`}
              data-gtag="cta"
              data-cta="book_consultation"
              data-location="navbar_mobile"
              onClick={() => setOpen(false)}
            >
              <Button intent="accent" size="lg" full>
                Book a Free Consultation
              </Button>
            </a>

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchedPath(l)}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-1.5 rounded text-sm font-semibold transition ${
                    l === currentLocale
                      ? "bg-brand text-white"
                      : "text-slate-500 hover:text-brand"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
