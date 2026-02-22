import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F6F9] via-[#F2FAFB] to-[#FAFBFC]">
      <div className="section-container relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-20 text-center lg:py-28">
        <p className="body-sm mb-5 font-semibold uppercase tracking-widest text-brand">
          DATA & AI SYSTEMS FOR MODERN TEAMS
        </p>

        <h1 className="heading-1 mx-auto max-w-4xl text-balance text-foreground">
          We build{" "}
          <span className="text-brand">data & AI systems</span>{" "}
          that actually run your business.
        </h1>

        <p className="body-lg mx-auto mt-6 max-w-[60ch] text-pretty text-muted-foreground">
          From analytics foundations to production-ready machine learning and custom
          internal tools, Meniva helps growing companies turn scattered data into
          reliable systems that drive decisions and revenue.
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
