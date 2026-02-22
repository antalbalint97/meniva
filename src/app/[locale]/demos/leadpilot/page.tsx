import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeadPilot Demo | Meniva",
  description:
    "AI-powered lead scoring and qualification engine -- see how Meniva helps sales teams focus on the highest-intent prospects.",
};

export default function LeadPilotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F2FAFB] via-background to-background font-sans text-foreground">
      <div className="section-container py-20 lg:py-28">
        <div className="mb-4">
          <Link
            href="/demos"
            className="body-sm font-medium text-brand hover:underline"
          >
            &larr; Back to Demos
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <h1 className="heading-1 text-foreground">LeadPilot</h1>
          <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand">
            Live Demo
          </span>
        </div>

        <p className="body-lg mt-4 max-w-[56ch] text-muted-foreground">
          AI-powered lead scoring and qualification engine. See how we help
          sales teams focus on the highest-intent prospects using real-time
          signals and predictive models.
        </p>

        {/* Demo placeholder */}
        <div className="mt-12 flex min-h-[400px] items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white">
          <div className="flex flex-col items-center gap-4 text-center">
            <svg
              className="h-16 w-16 text-brand/40"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="6"
                y="10"
                width="52"
                height="36"
                rx="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M22 52h20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M32 46v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M26 28l4 4 8-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="heading-4 text-muted-foreground">
              Interactive demo loading soon
            </p>
            <p className="body-sm max-w-[36ch] text-muted-foreground">
              {"We're"} building the live interface. In the meantime, book a call to
              see a private walkthrough.
            </p>
            <a href="/#contact">
              <Button intent="accent" size="lg">
                Book a Walkthrough
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
