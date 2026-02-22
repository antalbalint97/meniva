import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

/* ──────────────────────────────────────────────
   Case Study data (placeholders)
   ────────────────────────────────────────────── */

const caseStudies = [
  {
    title: 'Dynamic Pricing Engine',
    metric: '18% revenue uplift in 8 weeks',
    tags: ['Pricing', 'ML', 'Retail'],
    href: '#',
  },
  {
    title: 'Executive KPI Dashboard',
    metric: '4 hours saved per week per manager',
    tags: ['Dashboards', 'BI', 'Manufacturing'],
    href: '#',
  },
  {
    title: 'Demand Forecasting Model',
    metric: '32% reduction in stock-outs',
    tags: ['Forecasting', 'Supply Chain', 'AI'],
    href: '#',
  },
  {
    title: 'Customer Churn Predictor',
    metric: '25% improvement in retention',
    tags: ['ML', 'SaaS', 'Analytics'],
    href: '#',
  },
];

export default function CaseStudies() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground">Demos & Case Studies</h2>
        <p className="body-lg mx-auto mt-3 max-w-[52ch] text-muted-foreground">
          Real results from real SMEs. See how focused sprints drive measurable impact.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Featured Live Demo card */}
        <Card className="lg:col-span-5 flex flex-col justify-between border-brand/30 bg-gradient-to-br from-brand-muted to-background">
          <CardContent className="flex flex-1 flex-col gap-4">
            <span className="body-sm font-semibold uppercase tracking-wider text-brand">
              Live Demo
            </span>
            <h3 className="heading-3 text-foreground">
              Interactive Pricing Dashboard
            </h3>
            <p className="body-sm text-muted-foreground">
              Explore a fully working BI dashboard built during a 2-week sprint.
              Filter by region, product category, and time period.
            </p>

            {/* Device mockup placeholder */}
            <div className="mt-2 flex flex-1 items-center justify-center rounded-lg border border-border bg-surface p-8">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <rect x="4" y="6" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 38h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24 34v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="24" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M22 20l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="body-sm">Demo preview coming soon</span>
              </div>
            </div>
          </CardContent>

          <div className="px-6 pb-6">
            <Button intent="accent" size="lg" full disabled>
              Open Demo (Coming Soon)
            </Button>
          </div>
        </Card>

        {/* Case study grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
          {caseStudies.map((cs) => (
            <Card key={cs.title} className="flex flex-col justify-between">
              <CardContent className="flex flex-col gap-3">
                <h3 className="heading-4 text-foreground">{cs.title}</h3>
                <p className="text-sm font-medium text-brand">{cs.metric}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href={cs.href}>
                  <Button intent="ghost" size="sm" className="px-0 text-brand hover:underline">
                    View case study &rarr;
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
