'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Label } from '@/components/ui/Input';

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-foreground">
      <svg className="h-4 w-4 shrink-0 text-brand" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M13.25 4.75L6 12 2.75 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </li>
  );
}

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
      {/* Left: CTA block */}
      <div className="flex flex-1 flex-col justify-center">
        <h2 className="heading-2 text-foreground">
          Ready to unblock your data roadmap?
        </h2>
        <p className="body-lg mt-3 max-w-[48ch] text-muted-foreground">
          Tell us what you{"'"}re trying to build or fix. We{"'"}ll reply with
          a tailored proposal within 24 hours.
        </p>

        <ul className="mt-6 flex flex-col gap-3" role="list">
          <CheckBullet>Clear scope from day one</CheckBullet>
          <CheckBullet>Automation-first approach</CheckBullet>
          <CheckBullet>Measurable outcomes guaranteed</CheckBullet>
        </ul>

        <div className="mt-8">
          <a
            href="mailto:info@meniva.net?subject=Discovery%20call%20request"
            data-gtag="cta"
            data-cta="book_consultation"
            data-location="contact_section"
          >
            <Button intent="accent" size="lg">
              Book a Free Consultation
            </Button>
          </a>
        </div>
      </div>

      {/* Right: form */}
      <div className="flex-1">
        <Card className="border-border">
          <CardContent>
            <form
              className="flex flex-col gap-5"
              onSubmit={async (e) => {
                e.preventDefault();
                const start = performance.now();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);

                const body = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                };

                try {
                  (window as unknown as Record<string, unknown> & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'contact_form_start', {
                    form_id: 'contact',
                    method: 'contact_form',
                  });

                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                  });

                  if (res.ok) {
                    (window as unknown as Record<string, unknown> & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'generate_lead', {
                      method: 'contact_form',
                      form_id: 'contact',
                      time_to_submit_ms: Math.round(performance.now() - start),
                    });
                    setTimeout(() => {
                      window.location.href = '/thank-you';
                    }, 150);
                  } else {
                    alert('Something went wrong. Please try again later.');
                  }
                } catch (err) {
                  console.error('Contact form error:', err);
                  alert('Failed to send message. Please try again later.');
                }
              }}
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} required placeholder="Tell us about your data challenge..." />
              </div>

              <Button
                type="submit"
                intent="accent"
                size="lg"
                full
                data-gtag="cta"
                data-cta="contact_form_submit"
                data-location="contact_section"
              >
                Send Message
              </Button>

              <p className="body-sm text-center text-muted-foreground">
                Or email us directly:{" "}
                <a
                  href="mailto:info@meniva.net"
                  className="font-medium text-brand underline-offset-2 hover:underline"
                >
                  info@meniva.net
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
