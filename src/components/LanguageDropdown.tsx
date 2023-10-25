"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {useLocale} from "next-intl"

interface LanguageDropdownProps {}

const LanguageDropdown: FC<LanguageDropdownProps> = ({}) => {
  const pathname = usePathname();
  const router = useRouter();
  const changeLang = (lang: "pl" | "en") => {
    if (pathname.startsWith("/pl")) {
      router.push("/" + lang + pathname.slice(3));
    } else {
      router.push("/" + lang + pathname);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Languages className="h-4 w-4 mr-1" />
          <span className="text-muted-foreground uppercase text-xs">
            {pathname.slice(0, 3) === "/pl" ? "PL" : "EN"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex gap-1"
          onClick={() => changeLang("en")}
        >
          <span className="text-muted-foreground uppercase text-xs">EN</span>{" "}
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1"
          onClick={() => changeLang("pl")}
        >
          <span className="text-muted-foreground uppercase text-xs">PL</span>{" "}
          Polski
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
