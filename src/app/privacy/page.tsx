'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
  const [showInfoBar, setShowInfoBar] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fromBanner = sessionStorage.getItem('fromConsentBanner');
    const consent = localStorage.getItem('consent');

    // Show info bar only if the user came here via Learn More
    // and has not yet made a cookie choice
    if (fromBanner === '1' && !consent) {
      setShowInfoBar(true);
    }

    // Clear flag so it won’t persist across later visits
    sessionStorage.removeItem('fromConsentBanner');
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy | Meniva</title>
        <meta
          name="description"
          content="Meniva's Privacy Policy explains how we collect, use, and protect your personal data in compliance with GDPR."
        />
        <link rel="canonical" href="https://meniva.net/privacy" />
      </Head>

      {showInfoBar && (
        <div className="bg-[#1E9EB8] text-white text-sm md:text-base py-3 px-4 text-center shadow-md">
          You’re currently viewing our Privacy Policy page. No analytics or
          tracking is active while you’re here.
        </div>
      )}

      <main className="min-h-screen bg-white text-black font-sans px-6 md:px-20 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">
          Effective Date: 2025.09.13 | Last Updated: 2025.09.13
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                <strong>Personal Information you provide:</strong> Name, email
                address, and any details you include when you submit a form.
              </li>
              <li>
                <strong>Automatically collected information:</strong> IP
                address, browser type, device information, and usage data (via
                cookies or analytics tools).
              </li>
              <li>
                <strong>Business information:</strong> If you engage with us as
                a client, we may collect company details necessary for providing
                our services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Respond to inquiries and provide requested services.</li>
              <li>Manage client relationships and deliver consulting projects.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal obligations.</li>
              <li>
                Send updates or marketing communications (only with your
                consent).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Legal Basis for Processing (GDPR)
            </h2>
            <p>We process personal data based on:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Your <strong>consent</strong> (e.g., when you fill out a form).
              </li>
              <li>
                <strong>Contractual necessity</strong> (to provide services).
              </li>
              <li>
                Our <strong>legitimate interests</strong> (website improvement,
                analytics).
              </li>
              <li>
                <strong>Legal obligations</strong> (record-keeping, compliance).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Sharing Your Information
            </h2>
            <p>We do not sell your data. We may share it only with:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Trusted service providers (e.g., hosting, analytics, email
                services).
              </li>
              <li>Legal authorities if required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and third-party analytics tools (e.g.,
              Google Analytics) to understand visitor usage and improve user
              experience. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p>We keep your personal data only as long as necessary:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Contact inquiries: up to 12 months.</li>
              <li>
                Client project records: for the duration of the contract plus
                legal retention periods.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access, correct, or delete your personal data.</li>
              <li>Restrict or object to processing.</li>
              <li>Withdraw consent at any time.</li>
              <li>File a complaint with your local data protection authority.</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, contact us at{' '}
              <strong>info@meniva.net</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your data against loss, misuse, or unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              9. International Transfers
            </h2>
            <p>
              We primarily process data within the European Economic Area (EEA).
              If data is transferred outside the EEA, we ensure appropriate
              safeguards are in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your personal
              data, please contact:
            </p>
            <p className="mt-2">
              <strong>Meniva</strong>
              <br />
              Email:{' '}
              <a href="mailto:info@meniva.net" className="underline">
                info@meniva.net
              </a>
              <br />
              Budapest, Hungary
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
