const groups = [
  {
    label: "Languages & Analytics",
    items:
      "Python, PySpark, SQL, pandas, NumPy, scikit-learn, DAX, VBA",
  },
  {
    label: "Visualization & BI",
    items:
      "Power BI, Tableau, Looker, Plotly, Dash, Streamlit, Google Analytics",
  },
  {
    label: "Machine Learning & AI",
    items:
      "PyTorch, LSTM, GRU, Bayesian models, reinforcement learning, forecasting models",
  },
  {
    label: "Cloud & Infrastructure",
    items: "AWS (SageMaker), Azure, Docker, Git, Bash",
  },
  {
    label: "Data Collection",
    items: "BeautifulSoup, Selenium",
  },
];

export default function TechStack() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">
          Technologies We Work With
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
              {group.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {group.items}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
