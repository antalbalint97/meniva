import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F6F9] via-[#F2FAFB] to-background">
      <div className="section-container relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-20 text-center lg:py-28">
        <p className="body-sm mb-4 font-semibold uppercase tracking-widest text-brand">
          EXPERT-LED DATA SPRINTS
        </p>

        <h1 className="heading-1 mx-auto max-w-3xl text-balance text-foreground">
          We Unblock Your{" "}
          <span className="text-brand">Data Team</span>
        </h1>

        <p className="body-lg mx-auto mt-6 max-w-[54ch] text-pretty text-muted-foreground">
          From raw data to custom tools and business systems, Meniva delivers
          end-to-end solutions that turn complexity into clarity and action.
          We help SMEs across Europe implement BI and AI strategies that work.
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
