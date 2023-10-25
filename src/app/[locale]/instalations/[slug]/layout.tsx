import Sidebar from "@/components/Sidebar";
import { FC } from "react";

interface Layout {
  children: React.ReactNode;
  params: {locale:string}
}

const Layout = async ({ children,params:{locale} }:Layout) => {

  return <div className="grid grid-cols-4 lg:grid-cols-6 sm:container">
  <div className="hidden md:block sticky top-14 w-full h-[calc(100vh-3.6rem)]">
    <Sidebar />
  </div>
    {children}    
</div>
};

export default Layout;
