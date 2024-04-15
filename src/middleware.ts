// import createMiddleware from "next-intl/middleware";

import { NextRequest, NextResponse } from "next/server";
// export default createMiddleware({
//   locales: ["en", "pl"],
//   defaultLocale: "en",
// });

const getLang = (path: string) => {
  switch (path.split("/")[1]) {
    case "en":
      return "en";
    case "pl":
      return "pl";
    default:
      return null;
  }
};

const middleware = (req: NextRequest) => {
  const lang = getLang(req.nextUrl.pathname);
  const cookieLang = req.cookies.get("NEXT_LOCALE")?.value;
  // console.log(lang, cookieLang);
  // console.log(req.nextUrl.pathname,req.url)

  if (
    typeof lang === "string" &&
    typeof cookieLang === "string" &&
    lang !== cookieLang
  ) {
    const response = NextResponse.next();
    response.cookies.set({ name: "NEXT_LOCALE", value: lang });
    return response;
  }

  if (lang && !cookieLang) {
    const response = NextResponse.next();
    response.cookies.set({ name: "NEXT_LOCALE", value: lang });
    return response;
  }

  if (!lang) {
    if (cookieLang) {
      const response = NextResponse.redirect(
        new URL("/" + cookieLang + req.nextUrl.pathname, req.url)
      );
      return response;
    }
    const response = NextResponse.redirect(
      new URL("/en" + req.nextUrl.pathname, req.url)
    );
    response.cookies.set({ name: "NEXT_LOCALE", value: "en" });
    return response;
  }
};

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

export default middleware;
