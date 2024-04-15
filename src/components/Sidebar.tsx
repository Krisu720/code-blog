"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";
import { SheetClose } from "./ui/sheet";
import { SidebarNavigation } from "@/types/global";

const Sidebar = ({
  sheetClose,
  navigation,
}: {
  sheetClose?: boolean;
  navigation: SidebarNavigation;
}) => {
  const pathname = usePathname()

  return (
    <ScrollArea.Root className="w-full h-full py-4 ">
      <ScrollArea.Viewport className="h-full w-full ">
        <aside className="flex flex-col items-start">
          {Object.entries(navigation).map(({ "0": name, "1": nav }) => (
            <React.Fragment key={name}>
              <span className="text-muted-foreground text-base mt-2">
                {name}
              </span>
              {nav.map((nav) => {
                if (pathname.includes(nav.path)) {
                  return (
                    <span
                      key={nav.label}
                      className="select-none hover:no-underline px-3 py-2 rounded text-primary text-sm font-semibold"
                    >
                      {nav.label}
                    </span>
                  );
                } else {
                  return sheetClose ? (
                    <SheetClose asChild>
                      <Link
                        key={nav.label}
                        href={nav.path}
                        className={cn(
                          buttonVariants({
                            variant: "link",
                            size: "sm",
                            className: "text-accent-foreground",
                          })
                        )}
                      >
                        {nav.label}  
                      </Link>
                    </SheetClose>
                  ) : (
                    <Link
                      key={nav.label}
                      href={nav.path}
                      className={cn(
                        buttonVariants({
                          variant: "link",
                          size: "sm",
                          className: "text-accent-foreground",
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
