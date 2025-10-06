// 'use client';

// import { useEffect, useState } from 'react';

// export default function CampaignStrip() {
//   const [visible, setVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     // Wait until user has made a cookie consent choice
//     const consent = localStorage.getItem('consent');
//     if (!consent) return;

//     const dismissed = sessionStorage.getItem('campaignDismissed');
//     const subscribed = sessionStorage.getItem('campaignSubscribed');

//     // Show strip if not dismissed or subscribed yet
//     if (!dismissed && !subscribed) {
//       setVisible(true);

//       // Log impression
//       (window as any).gtag?.('event', 'campaign_view', {
//         campaign_name: 'newsletter_strip',
//         campaign_type: 'email_signup',
//         location: 'top_banner',
//       });
//     }
//   }, []);

//   const handleDismiss = () => {
//     setVisible(false);
//     sessionStorage.setItem('campaignDismissed', 'true');

//     (window as any).gtag?.('event', 'campaign_dismiss', {
//       campaign_name: 'newsletter_strip',
//       campaign_type: 'email_signup',
//       location: 'top_banner',
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;

//     // User clicked Subscribe
//     (window as any).gtag?.('event', 'campaign_interaction', {
//       campaign_name: 'newsletter_strip',
//       campaign_type: 'email_signup',
//       action_type: 'submit_click',
//       location: 'top_banner',
//     });

//     try {
//       const res = await fetch('/api/subscribe', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });

//       if (res.ok) {
//         setSubmitted(true);
//         sessionStorage.setItem('campaignSubscribed', 'true');

//         (window as any).gtag?.('event', 'generate_lead', {
//           conversion_type: 'newsletter_signup',
//           method: 'campaign_strip',
//           campaign_name: 'newsletter_strip',
//           location: 'top_banner',
//         });
//       } else {
//         (window as any).gtag?.('event', 'campaign_error', {
//           campaign_name: 'newsletter_strip',
//           campaign_type: 'email_signup',
//           error_type: 'server_error',
//           location: 'top_banner',
//         });
//         alert('Something went wrong. Please try again later.');
//       }
//     } catch (err) {
//       console.error('Subscription error:', err);
//       (window as any).gtag?.('event', 'campaign_error', {
//         campaign_name: 'newsletter_strip',
//         campaign_type: 'email_signup',
//         error_type: 'network_error',
//         location: 'top_banner',
//       });
//       alert('Failed to subscribe. Please try again later.');
//     }
//   };

//   if (!visible) return null;

//   return (
//     <div
//       id="campaign-strip"
//       className="fixed top-[72px] left-0 w-full bg-[#1E9EB8] text-white py-3 px-4 shadow-md flex flex-col md:flex-row items-center justify-center gap-4 z-40"
//     >
//       {!submitted ? (
//         <>
//           <span className="text-sm md:text-base font-medium text-center md:text-left">
//             Stay ahead with data insights. Get free strategies & updates in your inbox.
//           </span>

//           <form onSubmit={handleSubmit} className="flex items-center gap-2">
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email"
//               className="px-3 py-2 rounded-md text-black text-sm w-56"
//             />
//             <button
//               type="submit"
//               className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-neutral-800 transition"
//             >
//               Subscribe
//             </button>
//           </form>

//           <button
//             onClick={handleDismiss}
//             aria-label="Dismiss"
//             className="text-white/80 hover:text-white ml-2 text-sm"
//           >
//             ✕
//           </button>
//         </>
//       ) : (
//         <span className="text-sm md:text-base font-medium text-center">
//           Thanks for subscribing! You’ll hear from us soon.
//         </span>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

export default function CampaignStrip() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [startedTyping, setStartedTyping] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Wait until user has made a cookie consent choice
    const consent = localStorage.getItem('consent');
    if (!consent) return;

    const dismissed = sessionStorage.getItem('campaignDismissed');
    const subscribed = sessionStorage.getItem('campaignSubscribed');

    // Show strip if not dismissed or subscribed yet
    if (!dismissed && !subscribed) {
      setVisible(true);

      // Fire GA4 view event
      (window as any).gtag?.('event', 'campaign_view', {
        campaign_name: 'newsletter_strip',
        campaign_type: 'email_signup',
        location: 'top_banner',
      });
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem('campaignDismissed', 'true');

    (window as any).gtag?.('event', 'campaign_dismiss', {
      campaign_name: 'newsletter_strip',
      campaign_type: 'email_signup',
      location: 'top_banner',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!startedTyping && value.length > 0) {
      setStartedTyping(true);
      (window as any).gtag?.('event', 'campaign_interact', {
        campaign_name: 'newsletter_strip',
        campaign_type: 'email_signup',
        interaction_type: 'start_fill',
        location: 'top_banner',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Track user intent
    (window as any).gtag?.('event', 'campaign_submit_click', {
      campaign_name: 'newsletter_strip',
      campaign_type: 'email_signup',
      interaction_type: 'submit_click',
      location: 'top_banner',
    });

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        sessionStorage.setItem('campaignSubscribed', 'true');

        (window as any).gtag?.('event', 'newsletter_signup', {
          campaign_name: 'newsletter_strip',
          method: 'campaign_strip',
          location: 'top_banner',
        });
      } else {
        (window as any).gtag?.('event', 'campaign_error', {
          campaign_name: 'newsletter_strip',
          campaign_type: 'email_signup',
          error_type: 'server_error',
          location: 'top_banner',
        });
        alert('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error('Subscription error:', err);
      (window as any).gtag?.('event', 'campaign_error', {
        campaign_name: 'newsletter_strip',
        campaign_type: 'email_signup',
        error_type: 'network_error',
        location: 'top_banner',
      });
      alert('Failed to subscribe. Please try again later.');
    }
  };

  if (!visible) return null;

  return (
    <div
      id="campaign-strip"
      className="fixed top-[72px] left-0 w-full bg-[#1E9EB8] text-white py-3 px-4 shadow-md flex flex-col md:flex-row items-center justify-center gap-4 z-40"
    >
      {!submitted ? (
        <>
          <span className="text-sm md:text-base font-medium text-center md:text-left">
            Stay ahead with data insights. Get free strategies & updates in your inbox.
          </span>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={handleChange}
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-black text-sm w-56"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-neutral-800 transition"
            >
              Subscribe
            </button>
          </form>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="text-white/80 hover:text-white ml-2 text-sm"
          >
            ✕
          </button>
        </>
      ) : (
        <span className="text-sm md:text-base font-medium text-center">
          Thanks for subscribing! You’ll hear from us soon.
        </span>
      )}
    </div>
  );
}
