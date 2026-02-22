import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos | Meniva",
  description:
    "Explore live demos and proof-of-concept tools built during real Meniva client sprints.",
};

const demos = [
  {
    slug: "leadpilot",
    title: "LeadPilot",
    description:
      "AI-powered lead scoring and qualification engine. See how we help sales teams focus on the highest-intent prospects.",
    tags: ["AI Agent", "Sales", "Automation"],
    status: "live" as const,
  },
  {
    slug: "pricing-dashboard",
    title: "Pricing Dashboard",
    description:
      "Interactive BI dashboard built during a 2-week sprint. Filter by region, product category, and time period.",
    tags: ["Dashboard", "BI", "Retail"],
    status: "coming-soon" as const,
  },
  {
    slug: "churn-predictor",
    title: "Churn Predictor",
    description:
      "ML model that identifies customers likely to leave. Actionable retention playbook included.",
    tags: ["ML", "SaaS", "Analytics"],
    status: "coming-soon" as const,
  },
  {
    slug: "demand-forecast",
    title: "Demand Forecast",
    description:
      "Time-series forecasting model that reduced stock-outs by 32% for a mid-market retailer.",
    tags: ["Forecasting", "Supply Chain", "AI"],
    status: "coming-soon" as const,
  },
];

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F2FAFB] via-background to-background font-sans text-foreground">
      <div className="section-container py-20 lg:py-28">
        <div className="mb-4">
          <Link
            href="/"
            className="body-sm font-medium text-brand hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>

        <h1 className="heading-1 text-foreground">Demos</h1>
        <p className="body-lg mt-4 max-w-[52ch] text-muted-foreground">
          Explore live demos and proof-of-concept tools built during real client
          sprints. Click any demo to see it in action.
        </p>

        <div className="mt-14 flex flex-col gap-5">
          {demos.map((demo) => {
            const isLive = demo.status === "live";
            return (
              <div
                key={demo.slug}
                className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="heading-3 text-foreground">{demo.title}</h2>
                    {isLive ? (
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                        Live
                      </span>
                    ) : (
                      <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="body-sm mt-2 text-muted-foreground">
                    {demo.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
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

                <div className="shrink-0">
                  {isLive ? (
                    <Link href={`/demos/${demo.slug}`}>
                      <Button intent="accent" size="lg">
                        Open Demo
                      </Button>
                    </Link>
                  ) : (
                    <Button intent="subtle" size="lg" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
