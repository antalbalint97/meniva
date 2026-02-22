import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F6F9] via-[#F2FAFB] to-[#FAFBFC]">
      <div className="section-container flex flex-col items-center justify-center py-24 text-center lg:py-32">
        <p className="body-sm mb-5 font-semibold uppercase tracking-widest text-brand">
          {"DATA STRATEGY \u00B7 BI \u00B7 AI \u00B7 AUTOMATION"}
        </p>

        <h1 className="heading-1 mx-auto max-w-4xl text-balance text-foreground">
          We Unblock Your{" "}
          <span className="text-brand">Data Team</span>
        </h1>

        <p className="body-lg mx-auto mt-6 max-w-[62ch] text-pretty text-muted-foreground">
          We design and build practical analytics, automation, and AI systems
          that remove bottlenecks — from KPI dashboards to production-grade
          pipelines and lead-scoring software. Clear scope, fast delivery,
          measurable impact.
        </p>

        <div className="mt-10">
          <a
            href="#demos"
            data-gtag="cta"
            data-cta="view_demos"
            data-location="hero"
          >
            <Button intent="accent" size="xl">
              View Demos
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
