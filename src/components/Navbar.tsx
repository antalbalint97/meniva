"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Demos", href: "/#demos" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white shadow-sm">
      <div className="section-container-wide flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" scroll aria-label="Meniva home">
          <Image
            src="/logo-meniva-kek.png"
            alt="Meniva logo - data and AI consultancy for SMEs"
            width={120}
            height={50}
            className="h-auto cursor-pointer"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 text-sm font-medium md:flex"
          aria-label="Main navigation"
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-slate-700 transition hover:text-brand"
            >
              {label}
            </a>
          ))}

          <a
            href="/#contact"
            data-gtag="cta"
            data-cta="book_consultation"
            data-location="navbar"
          >
            <Button intent="accent" size="md">
              Book a Free Consultation
            </Button>
          </a>
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
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-700 transition hover:text-brand"
              >
                {label}
              </a>
            ))}

            <a
              href="/#contact"
              data-gtag="cta"
              data-cta="book_consultation"
              data-location="navbar_mobile"
              onClick={() => setOpen(false)}
            >
              <Button intent="accent" size="lg" full>
                Book a Free Consultation
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
