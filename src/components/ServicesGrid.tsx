const pillars = [
  {
    icon: (
      <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Data Foundations & Analytics",
    description:
      "We design scalable data architectures and reporting systems that give leadership the clarity they need to act.",
    bullets: [
      "Data strategy & architecture",
      "KPI frameworks & data modeling",
      "BI dashboards (Power BI, Tableau, Looker)",
      "SQL analytics & ad-hoc reporting",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: "BI & Executive Dashboards",
    description:
      "Interactive dashboards and self-service analytics that connect to live data and update automatically.",
    bullets: [
      "Power BI / Tableau / Looker builds",
      "Executive & operational dashboards",
      "Automated reporting pipelines",
      "Self-service analytics layers",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" /><path d="M8.24 4.47A4 4 0 0 1 12 2" /><path d="M12 9v13" /><path d="M4.5 15.5l3-3" /><path d="M19.5 15.5l-3-3" /><path d="M8 19l4-4 4 4" />
      </svg>
    ),
    title: "ML & Forecasting",
    description:
      "From demand forecasting to churn prediction, we build ML systems that solve concrete business problems and run in production.",
    bullets: [
      "Demand & sales forecasting",
      "Churn & retention models",
      "Pricing optimization",
      "Recommendation systems",
      "MLOps pipelines",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "AI Automation & Agentic Systems",
    description:
      "LLM-powered agents, automated workflows, and custom internal tools that replace manual busywork.",
    bullets: [
      "LLM & agent-based systems",
      "Lead scoring & qualification engines",
      "Automated data collection & ETL",
      "Custom Streamlit / Dash apps",
      "Internal productivity tools",
    ],
  },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.25 4.75L6 12 2.75 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesGrid() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">
          Service Modules
        </h2>
        <p className="body-lg mx-auto mt-3 max-w-[58ch] text-muted-foreground">
          End-to-end data and AI capabilities, delivered as focused engagements
          with clear scope and measurable outcomes.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-0">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`flex flex-col gap-6 py-12 lg:flex-row lg:items-start lg:gap-16 ${
              i < pillars.length - 1 ? "border-b border-border" : ""
            }`}
          >
            {/* Left: icon + title + description + CTA */}
            <div className="lg:w-2/5">
              <div className="flex items-center gap-3">
                {pillar.icon}
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
                {"Discuss this \u2192"}
              </a>
            </div>

            {/* Right: bullet list */}
            <div className="lg:w-3/5">
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
                {pillar.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
