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

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
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
