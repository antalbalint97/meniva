import { Card, CardContent } from "@/components/ui/Card";

/* ──────────────────────────────────────────────
   Service data
   ────────────────────────────────────────────── */

const services = [
  {
    key: "strategy",
    title: "Data Strategy & Architecture",
    description: "Plan scalable data systems that support growth.",
    deliverables: [
      "Data maturity assessment",
      "KPI & metric framework design",
      "Modern data stack architecture",
      "Tool & vendor selection",
    ],
    technologies: [
      "PostgreSQL",
      "BigQuery",
      "Snowflake",
      "dbt",
      "Airflow",
      "Azure",
      "AWS",
      "GCP",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l4-4 4 4 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "engineering",
    title: "Data Engineering & Pipelines",
    description: "Reliable, automated data pipelines you can trust.",
    deliverables: [
      "ETL / ELT pipeline development",
      "Data modeling",
      "Data validation & testing",
      "Performance optimization",
    ],
    technologies: ["Python", "PySpark", "SQL", "dbt", "Airflow", "Docker", "Kafka"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: "bi",
    title: "Business Intelligence & Analytics",
    description: "Turn raw data into clear business insight.",
    deliverables: [
      "Executive dashboards",
      "Self-service BI",
      "Metric layer setup",
      "Reporting automation",
    ],
    technologies: ["Power BI", "Tableau", "Looker", "Superset", "Metabase"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
        <rect x="3" y="10" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="6" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="2" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: "ai",
    title: "AI & Machine Learning Solutions",
    description: "Practical AI that solves real business problems.",
    deliverables: [
      "Forecasting models",
      "Recommendation systems",
      "Churn & pricing models",
      "LLM-powered assistants",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "OpenAI",
      "HuggingFace",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14h8l2 8H6l2-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "mlops",
    title: "MLOps & Deployment",
    description: "From notebook to production.",
    deliverables: [
      "Model deployment",
      "Monitoring & logging",
      "CI/CD for ML",
      "Feature stores",
    ],
    technologies: ["Docker", "Kubernetes", "MLflow", "AWS SageMaker", "Azure ML"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
        <path d="M4 17l6-6 4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "enablement",
    title: "Analytics Enablement & Training",
    description: "Make your team confident with data.",
    deliverables: ["Workshops", "Documentation", "Best practices", "Internal playbooks"],
    technologies: [],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand" aria-hidden="true">
        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 14v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 11.5v4.5a6 6 0 006 6 6 6 0 006-6v-4.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function ServicesGrid() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">
          What We Do
        </h2>
        <p className="body-lg mx-auto mt-3 max-w-[52ch] text-muted-foreground">
          End-to-end data and AI capabilities for SMEs across Europe.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.key}
            className="border border-border bg-white transition-shadow hover:shadow-md"
          >
            <CardContent className="flex flex-col gap-4">
              {/* Header row: icon + title */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted">
                  {service.icon}
                </div>
                <div>
                  <h3 className="heading-4 text-foreground">{service.title}</h3>
                  <p className="body-sm mt-0.5 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What we do
                </p>
                <ul className="grid grid-cols-1 gap-1.5 text-sm text-foreground sm:grid-cols-2" role="list">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
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
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology badges */}
              {service.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
