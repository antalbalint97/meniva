"use client";

import { useState } from "react";
import { useDictionary } from "@/i18n/DictionaryContext";

const tabData = [
  {
    id: "languages" as const,
    items: [
      "Python", "SQL", "PySpark", "pandas", "NumPy",
      "scikit-learn", "DAX", "VBA", "Apache Spark",
    ],
  },
  {
    id: "bi" as const,
    items: [
      "Power BI", "Tableau", "Looker", "Plotly", "Dash",
      "Streamlit", "matplotlib", "seaborn", "Google Analytics",
    ],
  },
  {
    id: "ml" as const,
    items: [
      "PyTorch", "LSTM", "GRU", "Bayesian models",
      "Reinforcement learning", "Forecasting models",
    ],
  },
  {
    id: "cloud" as const,
    items: ["AWS (SageMaker)", "Azure", "Docker", "Git", "Bash"],
  },
  {
    id: "data" as const,
    items: ["BeautifulSoup", "Selenium"],
  },
  {
    id: "delivery" as const,
    items: ["Jira", "MLOps"],
  },
];

export default function TechTabs() {
  const [active, setActive] = useState(tabData[0].id);
  const d = useDictionary();
  const tabs = tabData.map((tab) => ({
    ...tab,
    label: d.tech.tabs[tab.id],
  }));
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">
          {d.tech.heading}
        </h2>
      </div>

      {/* Tab buttons */}
      <div
        className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Technology categories"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === tab.id
                ? "bg-brand text-brand-foreground"
                : "bg-muted text-muted-foreground hover:bg-border hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2"
      >
        {current.items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
}
