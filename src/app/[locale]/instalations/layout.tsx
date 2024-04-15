"use client";

import Sidebar from "@/components/Sidebar";
import { SidebarNavigation } from "@/types/global";
import { getDictionary, parseLocale } from "../../../../dictonaries/config";
import { allDocs } from "contentlayer/generated";
import { getNavigation } from "@/lib/navigation";
import useLang from "@/hooks/use-lang";

interface LayoutInterface {
  children: React.ReactNode;
  params: { locale: string };
}

const Layout =  ({ children}: LayoutInterface) => {
  const lang = useLang()
  const navs = getNavigation("instalations",lang)
  
  return (
    <div className="grid grid-cols-4 lg:grid-cols-6 sm:container">
      <div className="hidden md:block sticky top-14 w-full h-[calc(100vh-3.6rem)]">
        <Sidebar navigation={navs} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
