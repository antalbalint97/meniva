'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDictionary } from '@/i18n/DictionaryContext';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const t = useDictionary();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Never show on privacy policy page
    if (pathname === '/privacy') {
      setVisible(false);
      return;
    }

    // Show banner only if no consent choice stored
    const storedConsent = localStorage.getItem('consent');
    if (!storedConsent) {
      setVisible(true);

      // Fire GA4 event when banner is shown
      (window as any).gtag?.('event', 'consent_banner_shown', {
        page_path: pathname,
      });
    }

    // Listen for manual reset trigger
    const handler = () => {
      if (pathname !== '/privacy') {
        setVisible(true);

        // GA4 reset → shown again
        (window as any).gtag?.('event', 'consent_banner_shown', {
          page_path: pathname,
          reason: 'reset',
        });
      }
    };
    window.addEventListener('showConsentBanner', handler);

    return () => {
      window.removeEventListener('showConsentBanner', handler);
    };
  }, [pathname]);

  const handleChoice = (granted: boolean) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('consent', granted ? 'analytics' : 'denied');

    if (typeof (window as any).gtag === 'function') {
      // Update GA consent
      (window as any).gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
      });

      // Fire GA4 event for choice
      (window as any).gtag('event', granted ? 'consent_accept' : 'consent_deny', {
        page_path: pathname,
      });
    }

    setVisible(false);

    // 🔄 Force a page reload so CampaignStrip re-evaluates conditions
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl max-w-xl w-full mx-4 border-2 border-[#1E9EB8]">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#1E9EB8]">
          {t.consent.heading}
        </h2>
        <p className="text-base mb-4 text-center whitespace-pre-line">
          {t.consent.description}
        </p>
        <div className="text-center mb-6">
          <Link
            href="/privacy"
            onClick={() => {
              if (typeof window !== 'undefined') {
                sessionStorage.setItem('fromConsentBanner', '1');

                // GA4 learn more event
                (window as any).gtag?.('event', 'consent_learn_more', {
                  page_path: pathname,
                });
              }
            }}
            className="text-[#1E9EB8] font-medium hover:underline"
          >
            {t.consent.learnMore}
          </Link>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleChoice(false)}
            className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-base font-medium text-gray-800 transition"
          >
            {t.consent.deny}
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="px-6 py-2 rounded-lg bg-[#1E9EB8] hover:bg-[#178194] text-base font-semibold text-white transition"
          >
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Utility: trigger banner reset manually
 * Call window.dispatchEvent(new Event('showConsentBanner'))
 * from anywhere (e.g. footer "Change cookie settings" link).
 */
