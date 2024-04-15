"use client";

import Sidebar from "@/components/Sidebar";
import { getNavigation } from "@/lib/navigation";
import useLang from "@/hooks/use-lang";

interface LayoutInterface {
  children: React.ReactNode;
  params: { locale: string };
}

const Layout = ({ children }: LayoutInterface) => {
  const lang = useLang()
  const navs = getNavigation("components",lang)

  return (
    <div className="grid grid-cols-6 sm:container">
      <div className="hidden md:block sticky top-14 w-full h-[calc(100vh-3.6rem)]">
        <Sidebar navigation={navs} />
      </div>
      <div className="col-span-6 md:col-span-5 md:p-6 p-2">
      {children}
      </div>
    </div>
  );
};

export default Layout;
