"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC } from "react";
import { Lang, dictonaries } from "../../dictonaries";

interface SidebarProps {
  dictonary: typeof dictonaries["pl"] | typeof dictonaries["en"]
}

const Sidebar: FC<SidebarProps> = ({dictonary}) => {
  const params = useParams();


  type Navs = {
    label: string;
    path: string;
  }[];

  // const navs = {
  //   "Getting Started": [{ label: "Introduction", path: "introduction" }],
  //   Frameworks: [
  //     { label: "JS VITE", path: "jsvite" },
  //     { label: "React VITE", path: "reactvite" },
  //     { label: "Next.js 13", path: "nextjs13" },
  //     { label: "Express.js", path: "express" },
  //     { label: "React Native Expo", path: "reactnativeexpo" },
  //   ],
  //   Packages: [
  //     { label: "tRPC", path: "trpc" },
  //     { label: "Zustand", path: "zustand" },
  //     { label: "Zod", path: "zod" },
  //     { label: "React Hook Form", path: "reacthookform" },
  //     { label: "Framer Motion", path: "framermotion" },
  //     { label: "GSAP", path: "gsap" },
  //     { label: "Tailwind", path: "tailwind" },
  //     { label: "Shadcn library", path: "shadcn" },
  //     { label: "React Router", path: "reactrouter" },
  //     { label: "Next Auth", path: "nextauth" },
  //     { label: "Next Themes", path: "nextthemes" },
  //     { label: "Prisma", path: "prisma" },
  //     { label: "Drizzle", path: "drizzleorm" },
  //     { label: "Apex Charts", path: "apexcharts" },
  //     { label: "MDX", path: "mdx" },
  //   ],
  // } satisfies Record<PropertyKey, Navs>;

  const navs = {
    [dictonary.sidebar.names[0]]: [{ label: "Introduction", path: "introduction" }],
    [dictonary.sidebar.names[1]]: [
      { label: "Next.js 13", path: "nextjs13" },
    ],
    [dictonary.sidebar.names[2]]: [
      { label: "tRPC", path: "trpc" },
      { label: "Next Themes", path: "nextthemes" },
      { label: "MDX", path: "mdx" },
      {label: "Express.js",path:"express"},
      {label:"Shadcn",path:"shadcn"}
    ],
  } satisfies Record<PropertyKey, Navs>;

  return (
    <ScrollArea.Root className="w-full h-full py-4 ">
      <ScrollArea.Viewport className="h-full w-full ">
        <aside className="flex flex-col items-start">
          {Object.entries(navs).map(({ "0": name, "1": nav }) => (
            <React.Fragment key={name}>
              <span className="text-muted-foreground text-base my-2">
                {name}
              </span>
              {nav.map((nav) => {
                if (params.slug === nav.path) {
                  return (
                    <span
                      key={nav.label}
                      className="bg-primary select-none hover:no-underline px-2 py-2 rounded text-secondary text-sm font-semibold"
                    >
                      {nav.label}
                    </span>
                  );
                } else {
                  return (
                    <Link
                      key={nav.label}
                      href={nav.path}
                      className={cn(
                        buttonVariants({
                          variant: "link",
                          size: "sm",
                        })
                      )}
                    >
                      {nav.label}
                    </Link>
                  );
                }
              })}
            </React.Fragment>
          ))}
        </aside>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" className="flex w-1">
        <ScrollArea.Thumb className="w-0.5 h-2 rounded-full bg-primary flex-1 relative" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default Sidebar;
