import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050B10] via-[#07141C] to-[#02060A]">
      {/* Subtle brand gradient accent at top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, var(--brand-muted) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container-wide relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-12 py-20 lg:flex-row lg:gap-16 lg:py-28">
        {/* Left: Copy */}
        <div className="flex-1 text-center lg:text-left">
          <p className="body-sm mb-4 font-semibold uppercase tracking-widest text-brand">
            EXPERT-LED DATA SPRINTS
          </p>

          <h1 className="heading-1 text-balance text-foreground">
            We Unblock Your{" "}
            <span className="bg-gradient-to-r from-[#2BBAD6] to-[#5EEAD4] bg-clip-text text-transparent">Data Team</span>
          </h1>

          <p className="body-lg mx-auto mt-6 max-w-[56ch] text-pretty text-muted-foreground lg:mx-0">
            From raw data to custom tools and business systems, Meniva delivers
            end-to-end solutions that turn complexity into clarity and action.
            We help SMEs across Europe implement BI and AI strategies that work.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="/#contact"
              data-gtag="cta"
              data-cta="book_discovery"
              data-location="hero"
            >
              <Button intent="accent" size="xl">
                Book Discovery Call
              </Button>
            </a>

            <a
              href="/#services"
              data-gtag="cta"
              data-cta="explore_services"
              data-location="hero"
            >
              <Button intent="outline" size="xl">
                Explore Services
              </Button>
            </a>
          </div>
        </div>


      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        data-gtag="cta"
        data-cta="scroll_down"
        data-location="hero"
        className="absolute bottom-8 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand hover:text-brand"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
