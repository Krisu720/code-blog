import { CodeReadySettings } from "@/types/global";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const installPrefix = (
  packageManager: CodeReadySettings["packageManager"]
) => {
  switch (packageManager) {
    case "pnpm":
      return "i";
    case "bun":
      return "add";
    case "npm":
      return "i";
    case "yarn":
      return "add";
  }
};
