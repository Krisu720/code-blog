import { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
import ThemeDropdown from "./ThemeDropdown";
import LanguageDropdown from "./LanguageDropdown";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className=" border-b sticky top-0 dark:bg-black/20 backdrop-blur-xl">
      <div className="h-14  flex items-center justify-between px-6 container mx-auto">
        <div className="flex items-center gap-1">
          <Link href="/" className="font-medium mr-4">
            code<span className="text-primary">Ready</span>
          </Link>

          <Button variant="ghost">Resources</Button>
          <Link href="/instalations/introduction" className={cn(buttonVariants({variant: "ghost"}))}>Instalation</Link>
          <Button variant="ghost">Components</Button>
        </div>
        <div>
          <ThemeDropdown />
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
