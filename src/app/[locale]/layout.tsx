"use client";

import Providers from "@/components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound, usePathname } from "next/navigation";
import { getNavigation } from "@/lib/navigation";
import useLang from "@/hooks/use-lang";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const pathname = usePathname();
  const sidebarNavs = pathname.includes("/instalations")
    ? "instalations"
    : pathname.includes("/components")
    ? "components"
    : pathname.includes("/resources")
    ? "resources"
    : null;

  const lang = useLang()

  const navigation = sidebarNavs ? getNavigation(sidebarNavs,lang) : null;
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          <Navbar navigation={navigation} />
          <div className="min-h-[calc(100vh-3.5rem)] px-2 lg:px-0">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "de" }];
// }
