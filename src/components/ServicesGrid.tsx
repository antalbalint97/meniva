const pillars = [
  {
    title: "Data Foundations & Analytics",
    description:
      "We design scalable data architectures and reporting systems that give leadership the clarity they need to act.",
    outcomes: [
      "Data strategy & architecture",
      "KPI frameworks",
      "Data modeling",
      "BI dashboards (Power BI, Tableau, Looker)",
      "SQL analytics",
    ],
  },
  {
    title: "Data Engineering & Automation",
    description:
      "Reliable pipelines and automation that keep your data flowing, validated, and warehouse-ready without manual intervention.",
    outcomes: [
      "ETL / ELT pipelines",
      "PySpark & Spark jobs",
      "Data validation & monitoring",
      "Cloud data warehouses",
      "Workflow orchestration",
      "Custom automation tools",
    ],
  },
  {
    title: "Machine Learning & AI Systems",
    description:
      "From forecasting to LLM-powered agents, we build ML systems that solve concrete business problems and run in production.",
    outcomes: [
      "Forecasting",
      "Churn & retention models",
      "Pricing & optimization models",
      "Recommendation systems",
      "LLM & agent-based systems",
      "MLOps pipelines",
    ],
  },
  {
    title: "Custom Internal Tools & Products",
    description:
      "We ship the internal apps and dashboards your team actually uses -- from quick Streamlit prototypes to full productized software.",
    outcomes: [
      "Dash / Streamlit apps",
      "Internal dashboards",
      "Custom web tools",
      "Productized internal software (e.g., LeadPilot)",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">How We Help</h2>
        <p className="body-lg mx-auto mt-3 max-w-[58ch] text-muted-foreground">
          We design, build, and maintain practical data & AI systems -- from
          foundations to advanced machine learning and custom software.
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
            {/* Left: title + description */}
            <div className="lg:w-2/5">
              <h3 className="heading-3 text-foreground">{pillar.title}</h3>
              <p className="body-sm mt-2 text-muted-foreground">
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

            {/* Right: outcomes */}
            <div className="lg:w-3/5">
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
                {pillar.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M13.25 4.75L6 12 2.75 8.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {outcome}
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
