"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = "G-FE1M458W4C";

/**
 * Automatically sends page_view events on route changes.
 * Uses the gtag('config') setup from <head> in layout.tsx.
 */
export default function GA() {
  const pathname = usePathname();
  const search = useSearchParams();
  const first = useRef(true);

  useEffect(() => {
    if (!(window as any).gtag) return;

    // Skip first load (already tracked by gtag('config') in <head>)
    if (first.current) {
      first.current = false;
      return;
    }

    const page_path =
      pathname + (search?.toString() ? `?${search.toString()}` : "");

    (window as any).gtag("event", "page_view", {
      send_to: GA_ID,
      page_path,
      ...(location.hostname === "localhost" && { debug_mode: true }),
    });
  }, [pathname, search]);

  return null;
}

/**
 * Helper function to trigger custom GA4 events.
 * Usage: gtagEvent('event_name', { param1: 'value1' })
 */
export function gtagEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", name, params);
  }
}
