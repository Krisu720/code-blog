"use client";

import { FC, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { SearchIcon } from "lucide-react";
import {} from "@radix-ui/react-scroll-area";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { useHotkeys } from "@mantine/hooks";
import { getHotkeyHandler } from "@mantine/hooks";
import { SidebarNavigation } from "@/types/global";
import { getDocs, getNavigation } from "@/lib/navigation";
import useLang from "@/hooks/use-lang";
import { getDictionary } from "../../dictonaries/config";

interface SearchDialogProps {}

const SearchDialog: FC<SearchDialogProps> = ({}) => {
  const [field, setField] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  useHotkeys([["ctrl+K", () => setOpen((prev) => !prev)]]);
  const lang = useLang();

  const d = getDictionary(lang);

  const navs = {
    ...getNavigation("instalations", lang),
    ...getNavigation("components", lang),
    ...getNavigation("resources", lang),
  } satisfies SidebarNavigation;

  const items = Object.entries(navs).map(({ "0": name, "1": nav }) =>
    nav.filter(
      (val) =>
        val.label.toLocaleLowerCase().includes(field.toLocaleLowerCase()) ||
        val.tags.filter((tag) => tag.includes(field.toLocaleLowerCase()))
          .length > 0
    )
  );

  const isEmpty = !items
    .map((val) => val.length > 0)
    .find((val) => val === true)
    ? true
    : false;

  return (
    <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
      <DialogTrigger asChild>
        <button className="text-sm border flex-1 text-muted-foreground h-9  rounded-xl w-60 flex items-center px-2 justify-between relative hover:bg-secondary dark:hover:text-white transition-colors">
          {d.Navbar.search.placeholder}
          <span className="text-xs bg-secondary py-0.5 px-1 rounded absolute right-2">
            CTRL+K
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0">
        <div className="flex w-full items-center gap-1 h-12 px-2 border-b">
          <SearchIcon className="h-5 w-5" />
          <input
            onKeyDown={getHotkeyHandler([
              ["ctrl+K", () => setOpen((prev) => !prev)],
            ])}
            value={field}
            onChange={(e) => {
              setField(e.target.value);
            }}
            type="text"
            className="flex-1 bg-transparent outline-none"
            placeholder={d.Navbar.search.inputplaceholder}
          />
        </div>
        <div className="h-96">
          <ScrollArea.Root className="w-full h-full py-2">
            <ScrollArea.Viewport className="h-full w-full px-2 ">
              <div className=" flex flex-col">
                {Object.entries(navs).map(({ "0": name, "1": nav }) => (
                  <div key={name}>
                    <h1 className="text-xs text-muted-foreground">
                      {nav.filter(
                        (val) =>
                          val.label
                            .toLocaleLowerCase()
                            .includes(field.toLocaleLowerCase()) ||
                          val.tags.filter((tag) =>
                            tag.includes(field.toLocaleLowerCase())
                          ).length > 0
                      ).length > 0 && name}
                    </h1>
                    <div className="flex flex-col">
                      {nav
                        .filter(
                          (val) =>
                            val.label
                              .toLocaleLowerCase()
                              .includes(field.toLocaleLowerCase()) ||
                            val.tags.filter((tag) =>
                              tag.includes(field.toLocaleLowerCase())
                            ).length > 0
                        )
                        .map((item) => (
                          <DialogClose
                            key={item.label}
                            asChild
                            onClick={() => setField("")}
                          >
                            <Link
                              className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "inline-flex justify-start"
                              )}
                              href={item.path}
                            >
                              {item.label}
                            </Link>
                          </DialogClose>
                        ))}
                    </div>
                  </div>
                ))}
                {isEmpty && (
                  <div className="flex w-full h-full items-center justify-center">
                    <h1 className="text-lg text-muted-foreground">
                      {d.Navbar.search.empty}
                    </h1>
                  </div>
                )}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="flex w-1">
              <ScrollArea.Thumb className="w-0.5 h-2 rounded-full bg-primary flex-1 relative" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
