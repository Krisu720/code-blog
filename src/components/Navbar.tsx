import { FC, use, useEffect } from "react";
import { Button, buttonVariants } from "./ui/button";
import ThemeDropdown from "./ThemeDropdown";
import LanguageDropdown from "./LanguageDropdown";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, Settings } from "lucide-react";
import PackageDropdown from "./PackageDropdown";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import SearchDialog from "./SearchDialog";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {


  return (
    <div className=" border-b sticky top-0 dark:bg-black/20 backdrop-blur-xl z-10">
      <div className="h-14 container mx-auto">
        <div className="hidden h-full w-full md:flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Link href="/" className="font-medium mr-4">
              code<span className="text-primary">Ready</span>
            </Link>
            <Link
              href="/instalations/introduction"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Instalations
            </Link>
            <Link
              href="/guides"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Guides
            </Link>
            <Button variant="ghost">Components</Button>
          </div>
          <div className="flex items-center gap-1">
            <SearchDialog/>
            <PackageDropdown />
            <LanguageDropdown />
            <ThemeDropdown />
          </div>
        </div>
        <div className="md:hidden h-full w-full flex items-center justify-between">
          <Button variant="ghost" size="icon">
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <Link
                  href="/instalations/introduction"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Instalation
                </Link>
                <Link
                  href="/guides"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Guides
                </Link>
                <Button variant="ghost">Components</Button>
                <Sidebar />
              </SheetContent>
            </Sheet>
          </Button>
          <Link href="/" className="font-medium mr-4">
            code<span className="text-primary">Ready</span>
          </Link>
          <Button variant="ghost" size="icon">
            <Popover>
              <PopoverTrigger asChild>
                <Settings />
              </PopoverTrigger>
              <PopoverContent>
                <ThemeDropdown />
                <LanguageDropdown />
                <PackageDropdown />
              </PopoverContent>
            </Popover>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
