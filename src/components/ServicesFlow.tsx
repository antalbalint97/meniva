'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gtagEvent } from '@/components/GA';

// --- Data ---
const steps = [
  {
    title: "Insight Phase",
    subtitle: "Understand your data to spot hidden opportunities.",
    phase: "Understand",
    deliverables: [
      "✓ Data Quality Report",
      "✓ Stakeholder Interviews (3 sessions)",
      "✓ KPI Mapping to Business Goals",
    ],
    benefits: [
      "– A written summary of your data’s health",
      "– A prioritized list of data opportunities",
      "– Actionable KPIs for ongoing tracking",
    ],
  },
  {
    title: "Blueprint Phase",
    subtitle: "Build a strategy that aligns people, tech, and business goals.",
    phase: "Plan",
    deliverables: [
      "✓ Metric Framework",
      "✓ Architecture Sketch",
      "✓ Decision Mapping Workshop",
    ],
    benefits: [
      "– A clear data strategy aligned with business needs",
      "– First version of a scalable data stack",
      "– Guidance for future implementation",
    ],
  },
  {
    title: "Engine Phase",
    subtitle: "Build scalable and reliable data systems",
    phase: "Build",
    deliverables: [
      "✓ ETL Pipeline Setup",
      "✓ Data Validation System",
      "✓ Model Infrastructure Boilerplate",
    ],
    benefits: [
      "– Robust workflows with error handling",
      "– Clean, validated data for ML usage",
      "– Reusable infra for models",
    ],
  },
  {
    title: "Test Phase",
    subtitle: "Prototype AI solutions safely",
    phase: "Test",
    deliverables: [
      "✓ Prototype ML Model",
      "✓ MLOps Health Check",
      "✓ Evaluation Report",
    ],
    benefits: [
      "– A working ML proof of concept",
      "– Recommendations for production-readiness",
      "– Quantified business impact",
    ],
  },
  {
    title: "Launch Phase",
    subtitle: "Deploy AI into real environments",
    phase: "Launch",
    deliverables: [
      "✓ Integration with Product",
      "✓ UX/User Journey Testing",
      "✓ Monitoring Setup",
    ],
    benefits: [
      "– Users interact with AI in production",
      "– Risk mitigation with logging and alerts",
      "– Confidence to scale usage",
    ],
  },
  {
    title: "Scale Phase",
    subtitle: "Support long-term optimization and growth",
    phase: "Scale",
    deliverables: [
      "✓ Growth Metrics Dashboard",
      "✓ System Tuning Report",
      "✓ Feedback Loop Setup",
    ],
    benefits: [
      "– Track real business value",
      "– Optimize model performance",
      "– Capture user feedback for improvement",
    ],
  },
];

const priorities = [
  { key: 'understand', label: 'Understand my data', matches: ["Insight Phase", "Blueprint Phase", "Engine Phase"] },
  { key: 'prove', label: 'Pilot AI safely', matches: ["Test Phase", "Launch Phase", "Insight Phase"] },
  { key: 'scale', label: 'Scale our systems', matches: ["Launch Phase", "Scale Phase", "Engine Phase"] },
];

export default function ServicesFlow() {
  const [selected, setSelected] = useState('understand');
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const matchedSteps = steps.filter((step) =>
    priorities.find((p) => p.key === selected)?.matches.includes(step.title)
  );

  // Track section visibility (once)
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const section = document.getElementById('services');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          gtagEvent('services_section_view', { location: 'home' });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // When user switches priority tabs
  const handlePriorityClick = (key: string, label: string) => {
    setSelected(key);
    setActiveCard(null);
    gtagEvent('service_priority_change', { selected_priority: key, label });
  };

  // When user clicks on a service card
  const handleCardClick = (title: string) => {
    setActiveCard(title);
    gtagEvent('service_card_click', {
      service_title: title,
      selected_priority: selected,
      location: 'services_section',
    });
  };

  return (
    <section id="services" className="scroll-mt-28 py-14">
      <div className="flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold text-center mb-6">How can Meniva Help?</h2>
        <p className="text-center text-gray-500 mb-8">
          Practical data strategy & AI adoption for SMEs — delivered step by step.
        </p>

        {/* Priority Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {priorities.map((p) => (
            <button
              key={p.key}
              onClick={() => handlePriorityClick(p.key, p.label)}
              className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200
                ${
                  selected === p.key
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black hover:bg-black hover:text-white'
                }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
            >
              {matchedSteps.map((step) => (
                <motion.button
                  key={step.title}
                  onClick={() => handleCardClick(step.title)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-2xl shadow-sm border text-left transition-all duration-200 ${
                    activeCard === step.title
                      ? 'border-[#1E9EB8] bg-[#E8F8FA] shadow-md'
                      : 'border-gray-200 bg-white hover:shadow-md hover:border-[#1E9EB8]/60'
                  }`}
                >
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{step.subtitle}</p>

                  <div className="mb-3">
                    <h4 className="text-sm font-semibold mb-1">Deliverables:</h4>
                    <ul className="text-gray-800 text-sm space-y-1">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-1">You get:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {step.benefits.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
