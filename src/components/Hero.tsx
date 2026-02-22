"use client";

import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function Hero() {
  const t = useDictionary();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F6F9] via-[#F2FAFB] to-[#FAFBFC]">
      <div className="section-container flex flex-col items-center justify-center py-24 text-center lg:py-32">
        <p className="body-sm mb-5 font-semibold uppercase tracking-widest text-brand">
          {t.hero.badge}
        </p>

        <h1 className="heading-1 mx-auto max-w-4xl text-balance text-foreground">
          {t.hero.heading}{" "}
          <span className="text-brand">{t.hero.headingAccent}</span>
        </h1>

        <p className="body-lg mx-auto mt-6 max-w-[62ch] text-pretty text-muted-foreground">
          {t.hero.description}
        </p>

        <div className="mt-10">
          <a
            href="#demos"
            data-gtag="cta"
            data-cta="view_demos"
            data-location="hero"
          >
            <Button intent="accent" size="xl">
              {t.hero.cta}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
