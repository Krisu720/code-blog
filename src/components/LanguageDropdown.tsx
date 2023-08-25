'use client'

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

interface LanguageDropdownProps {}

const LanguageDropdown: FC<LanguageDropdownProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex gap-1">
          <span className="text-muted-foreground uppercase text-xs">EN</span>{" "}
          English
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-1">
          <span className="text-muted-foreground uppercase text-xs">PL</span>{" "}
          Polish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
