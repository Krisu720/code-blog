import { Button, buttonVariants } from "./ui/button";
import ThemeDropdown from "./ThemeDropdown";
import LanguageDropdown from "./LanguageDropdown";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, Settings } from "lucide-react";
import PackageDropdown from "./PackageDropdown";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import SearchDialog from "./SearchDialog";
import { useTranslations } from "next-intl";
import { headers } from "next/headers";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className=" border-b sticky top-0 dark:bg-black/20 backdrop-blur-xl z-10">
      <div className="h-14 px-2 lg:container mx-auto">
        <div className="h-full gap-2 w-full flex items-center justify-between">
          <div className="lg:flex items-center gap-1 hidden">
            <Link href="/" className="font-medium mr-4">
              code<span className="text-primary">Ready</span>
            </Link>
            <Link
              href="/instalations/introduction"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              {t("navs.templates")}
            </Link>
            <Link
              href="/components"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              {t("navs.components")}
            </Link>
            <Link
              href="/guides"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              {" "}
              {t("navs.guides")}
            </Link>
          </div>
          <SearchDialog />
          <div className="hidden lg:flex items-center gap-1">
            <PackageDropdown />
            <LanguageDropdown />
            <ThemeDropdown />
          </div>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <SheetClose asChild>
                  <Link href="/" className="font-medium mr-4">
                    code<span className="text-primary">Ready</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/instalations/introduction"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "inline-flex justify-start"
                    )}
                  >
                    {t("navs.templates")}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/guides"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "inline-flex justify-start"
                    )}
                  >
                    {t("navs.guides")}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/components"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "inline-flex justify-start"
                    )}
                  >
                    {t("navs.components")}
                  </Link>
                </SheetClose>

                <div className="flex-1 ">
                  <SheetClose asChild>
                    <Sidebar sheetClose />
                  </SheetClose>
                </div>
                <Button variant="ghost" size="icon">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Settings />
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col items-center w-[10rem]">
                      <ThemeDropdown />
                      <LanguageDropdown />
                      <PackageDropdown />
                    </PopoverContent>
                  </Popover>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
