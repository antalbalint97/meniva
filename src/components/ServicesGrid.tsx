"use client";

import { useDictionary } from "@/i18n/DictionaryContext";

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.25 4.75L6 12 2.75 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons = [
  (
    <svg key="df" className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  (
    <svg key="bi" className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
    </svg>
  ),
  (
    <svg key="ml" className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M8.24 4.47A4 4 0 0 1 12 2" /><path d="M12 9v13" /><path d="M4.5 15.5l3-3" /><path d="M19.5 15.5l-3-3" /><path d="M8 19l4-4 4 4" />
    </svg>
  ),
  (
    <svg key="ai" className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
];

const pillarKeys = ["dataFoundations", "biDashboards", "mlForecasting", "aiAutomation"] as const;

export default function ServicesGrid() {
  const t = useDictionary();

  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">
          {t.services.heading}
        </h2>
        <p className="body-lg mx-auto mt-3 max-w-[58ch] text-muted-foreground">
          {t.services.description}
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-5">
        {pillarKeys.map((key, idx) => {
          const pillar = t.services.pillars[key];
          return (
            <div
              key={key}
              className="flex flex-col gap-6 rounded-xl border border-border bg-white p-6 shadow-sm lg:flex-row lg:items-start lg:gap-16 lg:p-8"
            >
              <div className="lg:w-2/5">
                <div className="flex items-center gap-3">
                  {icons[idx]}
                  <h3 className="heading-3 text-foreground">{pillar.title}</h3>
                </div>
                <p className="body-sm mt-3 text-muted-foreground">
                  {pillar.description}
                </p>
                <a
                  href="/#contact"
                  className="mt-4 inline-block text-sm font-medium text-brand transition hover:underline"
                  data-gtag="cta"
                  data-cta={`discuss_${pillar.title.toLowerCase().replace(/\s+/g, "_")}`}
                  data-location="services_section"
                >
                  {t.services.discuss}
                </a>
              </div>

              <div className="lg:w-3/5">
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
                  {pillar.bullets.map((item: string) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
