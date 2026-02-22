import Link from "next/link";
import { Button } from "@/components/ui/Button";

const demos = [
  {
    slug: "leadpilot",
    title: "LeadPilot",
    description: "AI-powered lead scoring and qualification engine.",
    tags: ["AI Agent", "Sales", "Automation"],
    status: "live" as const,
  },
  {
    slug: "pricing-dashboard",
    title: "Pricing Dashboard",
    description: "Interactive BI dashboard built in a 2-week engagement.",
    tags: ["BI", "Retail", "Power BI"],
    status: "soon" as const,
  },
  {
    slug: "churn-predictor",
    title: "Churn Predictor",
    description: "Identify at-risk users before they leave; retention playbook included.",
    tags: ["ML", "Retention", "SaaS"],
    status: "soon" as const,
  },
  {
    slug: "demand-forecast",
    title: "Demand Forecasting System",
    description: "Predict stock-outs and demand shifts.",
    tags: ["ML", "Supply Chain", "Forecasting"],
    status: "soon" as const,
  },
  {
    slug: "kpi-dashboard",
    title: "Executive KPI Dashboard",
    description: "Real-time business performance monitoring.",
    tags: ["BI", "Analytics", "Executive"],
    status: "soon" as const,
  },
];

export default function DemoShowcase() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">
          Demos & References
        </h2>
        <p className="body-lg mx-auto mt-3 max-w-[52ch] text-muted-foreground">
          Explore selected systems we{"'"}ve built — real solutions solving real
          business problems.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        {demos.map((demo, i) => {
          const isLive = demo.status === "live";
          const Row = isLive ? Link : "div";
          const rowProps = isLive ? { href: `/demos/${demo.slug}` } : {};

          return (
            <div
              key={demo.slug}
              className={i < demos.length - 1 ? "border-b border-border" : ""}
            >
              {/* @ts-expect-error - conditional Link/div */}
              <Row
                {...rowProps}
                className={`group flex items-center gap-4 py-5 ${
                  isLive ? "cursor-pointer" : ""
                }`}
              >
                {/* Left: icon dot */}
                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isLive ? "bg-brand/10" : "bg-muted"
                  }`}
                >
                  <svg
                    className={`h-4 w-4 ${isLive ? "text-brand" : "text-muted-foreground"}`}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="4" />
                  </svg>
                </span>

                {/* Middle: text content */}
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <span
                      className={`text-base font-semibold text-foreground ${
                        isLive ? "group-hover:text-brand transition-colors" : ""
                      }`}
                    >
                      {demo.title}
                    </span>
                    <p className="body-sm text-muted-foreground">{demo.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex shrink-0 flex-wrap gap-1.5">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: status / CTA */}
                <div className="shrink-0">
                  {isLive ? (
                    <Button intent="ghost" size="sm" className="pointer-events-none">
                      Open Demo
                    </Button>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  )}
                </div>
              </Row>
            </div>
          );
        })}
      </div>
    </>
  );
}
