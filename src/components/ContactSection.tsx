'use client';

import { Button } from '@/components/ui/Button';
import { Input, Textarea, Label } from '@/components/ui/Input';

const benefits = [
  {
    icon: (
      <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="10" y1="5" x2="10" y2="15" /><line x1="5" y1="10" x2="15" y2="10" />
      </svg>
    ),
    title: 'No obligation',
    description: 'Free 30-minute discovery call to understand your needs.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 10.5l4 4 7-9" />
      </svg>
    ),
    title: 'Tailored advice',
    description: 'We assess your data maturity and propose a realistic roadmap.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="7" /><path d="M10 6v4l3 2" />
      </svg>
    ),
    title: 'Fast turnaround',
    description: 'First results in as little as 2-3 weeks.',
  },
];

export default function ContactSection() {
  return (
    <div>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left: CTA block */}
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="heading-2 text-foreground">
            {"Let's Talk Data"}
          </h2>
          <p className="body-lg mt-3 max-w-[48ch] text-muted-foreground">
            Whether you need a quick audit or a full AI deployment, we start
            every engagement with a conversation.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  {b.icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{b.title}</p>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="flex-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
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

              <p className="body-sm text-center text-muted-foreground italic">
                We reply within 48 hours.
              </p>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
