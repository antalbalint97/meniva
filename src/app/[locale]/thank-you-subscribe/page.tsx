"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouSubscribe() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        page_path: "/thank-you-subscribe",
      });

      (window as any).gtag("event", "newsletter_signup_success", {
        event_category: "engagement",
        event_label: "newsletter_subscription",
        method: "campaign_strip",
      });
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Thank you for subscribing!
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        You’re now subscribed to our newsletter. Expect free strategies, insights, and updates in your inbox soon.
      </p>
      <Link
        href="/"
        className="bg-[#1E9EB8] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#178194] transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
