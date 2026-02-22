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

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
        {demos.map((demo) => {
          const isLive = demo.status === "live";
          const Wrapper = isLive ? Link : "div";
          const wrapperProps = isLive ? { href: `/demos/${demo.slug}` } : {};

          return (
            // @ts-expect-error - conditional Link/div
            <Wrapper
              key={demo.slug}
              {...wrapperProps}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
            >
              {/* Left: icon */}
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  isLive ? "bg-brand/10" : "bg-muted"
                }`}
              >
                <svg
                  className={`h-5 w-5 ${isLive ? "text-brand" : "text-muted-foreground"}`}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="4" />
                </svg>
              </span>

              {/* Center: text + tags */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-base font-semibold text-foreground ${
                      isLive ? "group-hover:text-brand transition-colors" : ""
                    }`}
                  >
                    {demo.title}
                  </span>
                  {isLive && (
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                      Live
                    </span>
                  )}
                </div>
                <p className="body-sm mt-1 text-muted-foreground">{demo.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: action */}
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
            </Wrapper>
          );
        })}
      </div>
    </>
  );
}
