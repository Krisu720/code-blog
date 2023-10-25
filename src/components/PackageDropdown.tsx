"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Package } from "lucide-react";
import useLocalStorage from "@/hooks/use-local-storage";
import { CodeReadySettings } from "@/types/global";

interface PackageDropdownProps {}

const PackageDropdown: FC<PackageDropdownProps> = ({}) => {
  const { values, changeValues } = useLocalStorage<CodeReadySettings>({
    key: "codeReadySettings",
    fillIfEmpty: { packageManager: "npm" },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Package className="mr-2" />
          {values?.packageManager}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => changeValues({ packageManager: "pnpm" })}
        >
          pnpm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeValues({ packageManager: "bun" })}
        >
          bun
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeValues({ packageManager: "npm" })}
        >
          npm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeValues({ packageManager: "yarn" })}
        >
          yarn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PackageDropdown;
