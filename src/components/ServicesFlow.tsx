'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { gtagEvent } from '@/components/GA';

/* ──────────────────────────────────────────────
   Sprint Pack data
   ────────────────────────────────────────────── */

const sprints = [
  {
    key: 'insight',
    title: 'Insight Sprint',
    value: 'Understand your data health and find quick wins.',
    deliverables: [
      'Data quality audit & report',
      'Stakeholder interviews (3 sessions)',
      'KPI mapping to business goals',
      'Prioritized opportunity backlog',
    ],
    idealFor: 'Teams starting their data journey or inheriting messy systems.',
    priority: 'understand',
  },
  {
    key: 'blueprint',
    title: 'Blueprint Sprint',
    value: 'Design a strategy that aligns people, tech, and goals.',
    deliverables: [
      'Metric framework & decision map',
      'Architecture sketch for scalable stack',
      'Tool & vendor recommendation',
      'Implementation roadmap (90-day)',
    ],
    idealFor: 'Companies ready to move from ad-hoc reporting to a real data strategy.',
    priority: 'understand',
  },
  {
    key: 'engine',
    title: 'Engine Sprint',
    value: 'Build reliable pipelines and scalable data infrastructure.',
    deliverables: [
      'ETL / ELT pipeline setup',
      'Data validation & monitoring',
      'Model infrastructure boilerplate',
      'Documentation & runbooks',
    ],
    idealFor: 'Teams with a strategy who need execution on infrastructure.',
    priority: 'scale',
  },
  {
    key: 'pilot',
    title: 'AI Pilot Sprint',
    value: 'Prototype an AI solution safely and measure real impact.',
    deliverables: [
      'Working ML proof of concept',
      'Evaluation & bias report',
      'MLOps health check',
      'Business impact quantification',
    ],
    idealFor: 'Teams exploring AI but want evidence before committing budget.',
    priority: 'prove',
  },
  {
    key: 'launch',
    title: 'Launch Sprint',
    value: 'Deploy AI into production with guardrails and monitoring.',
    deliverables: [
      'Production integration',
      'UX / user journey testing',
      'Monitoring & alerting setup',
      'Risk mitigation playbook',
    ],
    idealFor: 'Companies moving from a successful pilot to real users.',
    priority: 'prove',
  },
  {
    key: 'scale',
    title: 'Scale Sprint',
    value: 'Optimize performance and build feedback loops for growth.',
    deliverables: [
      'Growth metrics dashboard',
      'System tuning & cost optimization',
      'Feedback loop setup',
      'Team enablement workshop',
    ],
    idealFor: 'Organizations with live AI systems ready to scale and improve.',
    priority: 'scale',
  },
];

const priorities = [
  { key: 'all', label: 'All sprints' },
  { key: 'understand', label: 'Understand my data' },
  { key: 'prove', label: 'Pilot AI safely' },
  { key: 'scale', label: 'Scale our systems' },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function ServicesFlow() {
  const [selected, setSelected] = useState('all');

  const filtered =
    selected === 'all'
      ? sprints
      : sprints.filter((s) => s.priority === selected);

  // Track section visibility (once)
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const section = document.getElementById('services');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          gtagEvent('services_section_view', { location: 'home' });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handlePriority = (key: string, label: string) => {
    setSelected(key);
    gtagEvent('service_priority_change', { selected_priority: key, label });
  };

  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground">How Can Meniva Help?</h2>
        <p className="body-lg mx-auto mt-3 max-w-[52ch] text-muted-foreground">
          Practical data strategy & AI adoption for SMEs -- delivered in focused sprints.
        </p>
      </div>

      {/* Priority pills */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {priorities.map((p) => (
          <button
            key={p.key}
            onClick={() => handlePriority(p.key, p.label)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              selected === p.key
                ? 'border-brand bg-brand text-brand-foreground'
                : 'border-border bg-white text-foreground hover:border-brand hover:text-brand'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Sprint cards grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((sprint) => (
          <Card key={sprint.key} className="flex flex-col justify-between">
            <CardContent className="flex flex-1 flex-col gap-4">
              <div>
                <h3 className="heading-4 text-foreground">{sprint.title}</h3>
                <p className="body-sm mt-1 text-muted-foreground">{sprint.value}</p>
              </div>

              <ul className="flex flex-col gap-1.5 text-sm text-foreground" role="list">
                {sprint.deliverables.map((d, i) => (
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

              <p className="body-sm text-muted-foreground">
                <span className="font-medium text-foreground">Ideal for:</span>{' '}
                {sprint.idealFor}
              </p>
            </CardContent>

            <div className="px-6 pb-6">
              <a
                href="/#contact"
                data-gtag="cta"
                data-cta="discuss_sprint"
                data-location="services_section"
                data-item={sprint.key}
              >
                <Button intent="ghost" size="sm" className="px-0 text-brand hover:underline">
                  Discuss this sprint &rarr;
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
