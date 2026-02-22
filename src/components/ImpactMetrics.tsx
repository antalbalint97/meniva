const metrics = [
  { value: "\u20AC1.85B", label: "Revenue scale supported" },
  { value: "~\u20AC250k", label: "Annual cost reduction delivered" },
  { value: "~\u20AC850k", label: "Revenue uplift delivered" },
  { value: "5 days/yr", label: "Saved via automation" },
];

export default function ImpactMetrics() {
  return (
    <div className="section-container">
      <div className="grid grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-border">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center text-center md:px-6">
            <span className="text-2xl font-extrabold tracking-tight text-foreground lg:text-3xl">
              {m.value}
            </span>
            <span className="mt-1 body-sm text-muted-foreground">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
