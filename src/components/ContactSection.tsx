'use client';

import { Button } from '@/components/ui/Button';
import { Input, Textarea, Label } from '@/components/ui/Input';
import { useDictionary } from '@/i18n/DictionaryContext';

export default function ContactSection() {
  const t = useDictionary();

  const benefits = [
    {
      icon: (
        <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="10" y1="5" x2="10" y2="15" /><line x1="5" y1="10" x2="15" y2="10" />
        </svg>
      ),
      title: t.contact.noObligation,
      description: t.contact.noObligationDesc,
    },
    {
      icon: (
        <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 10.5l4 4 7-9" />
        </svg>
      ),
      title: t.contact.tailoredAdvice,
      description: t.contact.tailoredAdviceDesc,
    },
    {
      icon: (
        <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="10" cy="10" r="7" /><path d="M10 6v4l3 2" />
        </svg>
      ),
      title: t.contact.fastTurnaround,
      description: t.contact.fastTurnaroundDesc,
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left: CTA block */}
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="heading-2 text-foreground">
            {t.contact.heading}
          </h2>
          <p className="body-lg mt-3 max-w-[48ch] text-muted-foreground">
            {t.contact.description}
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
                    alert(t.contact.errorGeneric);
                  }
                } catch (err) {
                  console.error('Contact form error:', err);
                  alert(t.contact.errorNetwork);
                }
              }}
            >
              <div>
                <Label htmlFor="name">{t.contact.nameLabel}</Label>
                <Input id="name" name="name" required placeholder={t.contact.namePlaceholder} />
              </div>

              <div>
                <Label htmlFor="email">{t.contact.emailLabel}</Label>
                <Input id="email" name="email" type="email" required placeholder={t.contact.emailPlaceholder} />
              </div>

              <div>
                <Label htmlFor="message">{t.contact.messageLabel}</Label>
                <Textarea id="message" name="message" rows={4} required placeholder={t.contact.messagePlaceholder} />
              </div>

              <p className="body-sm text-center text-muted-foreground italic">
                {t.contact.replyNote}
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
                {t.contact.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
