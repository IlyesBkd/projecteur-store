import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname !== "/" ||
    PUBLIC_FILE.test(pathname) ||
    req.cookies.get("NEXT_LOCALE") ||
    req.nextUrl.searchParams.has("locale")
  ) {
    return NextResponse.next();
  }

  const country = req.headers.get("x-vercel-ip-country");
  const acceptLanguage = req.headers.get("accept-language") || "";
  const prefersEnglish = country === "US" || acceptLanguage.toLowerCase().startsWith("en");

  if (!prefersEnglish) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/en";
  const res = NextResponse.redirect(url);
  res.cookies.set("NEXT_LOCALE", "en-US", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  matcher: ["/"],
};
