import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale } from "./i18n/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already starts with a locale
  const segments = pathname.split("/");
  const firstSegment = segments[1]; // e.g. "en" or "hu"

  if (isLocale(firstSegment)) {
    // Already has a locale prefix, continue
    return NextResponse.next();
  }

  // Redirect non-locale paths to the default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Match all paths except static files, API, and Next.js internals
    "/((?!_next|api|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|woff2|ttf|eot)).*)",
  ],
};
