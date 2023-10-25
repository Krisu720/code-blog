import { NextRequest, NextResponse } from "next/server";
import { dictonaries } from "../dictonaries";

export const middleware = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const path = Object.keys(dictonaries).filter((key) =>
    pathname.startsWith(`/${key}`)
  );
  if (path.length < 1) {
    return NextResponse.redirect(new URL("/en" + pathname, req.url));
  }
};

export const config = {
  matcher: [
    //Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
