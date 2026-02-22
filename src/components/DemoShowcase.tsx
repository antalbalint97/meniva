import Link from "next/link";
import { Button } from "@/components/ui/Button";

/* ──────────────────────────────────────────────
   Demo row data
   ────────────────────────────────────────────── */

const demos = [
  {
    slug: "leadpilot",
    title: "LeadPilot",
    description:
      "AI-powered lead scoring and qualification engine. See how we help sales teams focus on the highest-intent prospects.",
    tags: ["AI Agent", "Sales", "Automation"],
    icon: (
      <svg className="h-8 w-8 text-brand" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 22V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 22V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "pricing-dashboard",
    title: "Pricing Dashboard",
    description:
      "Interactive BI dashboard built during a 2-week engagement. Filter by region, product category, and time period.",
    tags: ["Dashboard", "BI", "Retail"],
    icon: (
      <svg className="h-8 w-8 text-brand" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "churn-predictor",
    title: "Churn Predictor",
    description:
      "ML model that identifies customers likely to leave. Actionable retention playbook included.",
    tags: ["ML", "SaaS", "Analytics"],
    icon: (
      <svg className="h-8 w-8 text-brand" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 20l5-5 4 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "demand-forecast",
    title: "Demand Forecast",
    description:
      "Time-series forecasting model that reduced stock-outs by 32% for a mid-market retailer.",
    tags: ["Forecasting", "Supply Chain", "AI"],
    icon: (
      <svg className="h-8 w-8 text-brand" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 22c2-3 4-8 7-8s3 5 7 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function DemoShowcase() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground">See It in Action</h2>
        <p className="body-lg mx-auto mt-3 max-w-[48ch] text-muted-foreground">
          Explore live demos and proof-of-concept tools built during real client projects.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
        {demos.map((demo) => (
          <Link
            key={demo.slug}
            href={`/demos/${demo.slug}`}
            className="group flex items-center gap-5 rounded-xl border border-border bg-white px-6 py-5 transition-all hover:border-brand/40 hover:shadow-md"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-muted transition-colors group-hover:bg-brand/10">
              {demo.icon}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center gap-3">
                <h3 className="heading-4 text-foreground group-hover:text-brand transition-colors">
                  {demo.title}
                </h3>
                <div className="hidden gap-2 sm:flex">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="body-sm text-muted-foreground line-clamp-1">
                {demo.description}
              </p>
            </div>

            {/* Arrow CTA */}
            <span className="hidden shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100 sm:block">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/demos">
          <Button intent="outline" size="lg">
            View All Demos
          </Button>
        </Link>
      </div>
    </>
  );
}
