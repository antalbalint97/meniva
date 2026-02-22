const reasons = [
  {
    title: "Built by practitioners",
    description:
      "We build the same systems we've shipped inside real companies.",
  },
  {
    title: "Automation-first",
    description: "If it can be automated, we automate it.",
  },
  {
    title: "Business impact first",
    description: "Every system is tied to measurable outcomes.",
  },
];

export default function WhyMeniva() {
  return (
    <>
      <div className="text-center">
        <h2 className="heading-2 text-foreground text-balance">Why Meniva</h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
        {reasons.map((reason) => (
          <div key={reason.title} className="text-center">
            <h3 className="heading-4 text-foreground">{reason.title}</h3>
            <p className="body-sm mt-2 text-muted-foreground">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
