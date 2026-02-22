import Link from "next/link";

const demos = [
  {
    slug: "leadpilot",
    title: "LeadPilot",
    description: "AI-powered lead qualification & enrichment system",
  },
  {
    slug: "dynamic-pricing",
    title: "Dynamic Pricing Engine",
    description: "ML-driven pricing optimization",
  },
  {
    slug: "kpi-dashboard",
    title: "Executive KPI Dashboard",
    description: "Real-time business performance monitoring",
  },
  {
    slug: "demand-forecast",
    title: "Demand Forecasting System",
    description: "Predict stock-outs & demand shifts",
  },
  {
    slug: "churn-predictor",
    title: "Customer Churn Predictor",
    description: "Identify at-risk users before they leave",
  },
];

/* Simple dot icon for each row */
function DotIcon() {
  return (
    <svg
      className="mt-1 h-5 w-5 shrink-0 text-brand"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="4" fill="currentColor" />
    </svg>
  );
}

export default function DemoShowcase() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">
          Demos & Products
        </h2>
        <p className="body-lg mx-auto mt-3 max-w-[52ch] text-muted-foreground">
          Explore selected systems we{"'"}ve built -- real solutions solving real
          business problems.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-0">
        {demos.map((demo, i) => (
          <Link
            key={demo.slug}
            href={`/demos/${demo.slug}`}
            className={`group flex items-start gap-4 py-5 transition-colors hover:bg-brand-muted/30 ${
              i < demos.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <DotIcon />
            <div className="flex flex-1 flex-col">
              <span className="text-base font-semibold text-foreground group-hover:text-brand transition-colors">
                {demo.title}
              </span>
              <span className="body-sm text-muted-foreground">
                {demo.description}
              </span>
            </div>
            <svg
              className="mt-1 h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10h12m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ))}
      </div>
    </>
  );
}
