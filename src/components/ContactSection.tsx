'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Label } from '@/components/ui/Input';

const valueProps = [
  {
    icon: (
      <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'No obligation',
    description: 'Free 30-minute discovery call to understand your needs.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 10l5 5L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Tailored advice',
    description: 'We assess your data maturity and propose a realistic roadmap.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fast turnaround',
    description: 'First results in as little as 2-3 weeks.',
  },
];

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
      {/* Left: value props */}
      <div className="flex flex-1 flex-col justify-center">
        <h2 className="heading-2 text-foreground">{"Let's Talk Data"}</h2>
        <p className="body-lg mt-3 max-w-[48ch] text-muted-foreground">
          Whether you need a quick audit or a full AI deployment, we start every engagement with a conversation.
        </p>

        <div className="mt-8 flex flex-col gap-6">
          {valueProps.map((vp) => (
            <div key={vp.title} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted">
                {vp.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{vp.title}</p>
                <p className="body-sm text-muted-foreground">{vp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: form card */}
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
                  (window as any).gtag?.('event', 'contact_form_start', {
                    form_id: 'contact',
                    method: 'contact_form',
                  });

                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                  });

                  if (res.ok) {
                    (window as any).gtag?.('event', 'generate_lead', {
                      method: 'contact_form',
                      form_id: 'contact',
                      time_to_submit_ms: Math.round(performance.now() - start),
                    });
                    setTimeout(() => {
                      window.location.href = '/thank-you';
                    }, 150);
                  } else {
                    (window as any).gtag?.('event', 'contact_form_error', {
                      form_id: 'contact',
                      method: 'contact_form',
                      error_type: 'server_error',
                    });
                    alert('Something went wrong. Please try again later.');
                  }
                } catch (err) {
                  console.error('Contact form error:', err);
                  (window as any).gtag?.('event', 'contact_form_error', {
                    form_id: 'contact',
                    method: 'contact_form',
                    error_type: 'network_error',
                  });
                  alert('Failed to send message. Please try again later.');
                }
              }}
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your data challenge..."
                />
              </div>

              <p className="body-sm text-center text-muted-foreground">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
