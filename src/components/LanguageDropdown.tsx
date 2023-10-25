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
import { Lang } from "../../dictonaries";

interface LanguageDropdownProps {}

const LanguageDropdown: FC<LanguageDropdownProps> = ({}) => {
  const pathname = usePathname();
  const router = useRouter();
  const changeLang = (lang: Lang) => {
    const isSame = pathname.startsWith(`/${lang}`);
    if (isSame) return;
    router.push("/" + lang + pathname.slice(3));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
            <Languages className="h-4 w-4 mr-1" />
            <span className="text-muted-foreground uppercase text-xs">
              {pathname.slice(1, 3)}
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
