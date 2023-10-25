import Sidebar from "@/components/Sidebar";
import { FC } from "react";
import { checkLang, getDictonary } from "../../../../../dictonaries";

interface Layout {
  children: React.ReactNode;
  params: {lang:string}
}

const Layout = async ({ children,params:{lang} }:Layout) => {

  const disctonary = await getDictonary(checkLang(lang))

  return <div className="grid grid-cols-4 lg:grid-cols-6 sm:container">
  <div className="hidden md:block sticky top-14 w-full h-[calc(100vh-3.6rem)]">
    <Sidebar dictonary={disctonary}/>
  </div>
    {children}    
</div>
};

export default Layout;
