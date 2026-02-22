"use client";

import { useDictionary } from "@/i18n/DictionaryContext";

export default function ImpactMetrics() {
  const t = useDictionary();

  const metrics = [
    {
      value: t.metrics.revenueScale,
      label: t.metrics.revenueScaleLabel,
      icon: (
        <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      value: t.metrics.costReduction,
      label: t.metrics.costReductionLabel,
      icon: (
        <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      value: t.metrics.revenueUplift,
      label: t.metrics.revenueUpliftLabel,
      icon: (
        <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
    },
    {
      value: t.metrics.hoursSaved,
      label: t.metrics.hoursSavedLabel,
      icon: (
        <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <div className="section-container">
      <div className="grid grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-4 md:gap-x-0">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center text-center md:px-6">
            <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
              {m.icon}
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-foreground lg:text-3xl">
              {m.value}
            </span>
            <span className="mt-1 body-sm text-muted-foreground">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
