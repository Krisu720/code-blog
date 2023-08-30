'use client'

import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import {} from "@radix-ui/react-scroll-area";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Button } from "./ui/button";

interface SearchDialogProps {}

const SearchDialog: FC<SearchDialogProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm border text-muted-foreground h-9  rounded-xl w-60 flex items-center px-2 justify-between relative hover:bg-secondary hover:text-white transition-colors">
          Search documenation
          <span className="text-xs bg-secondary py-0.5 px-1 rounded absolute right-2">
            CTRL+K
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0">
        <div className="flex w-full items-center gap-1 h-12 px-2 border-b">
          <SearchIcon className="h-5 w-5" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none"
            placeholder="Search something..."
          />
        </div>
        <div className="h-96">
          <ScrollArea.Root className="w-full h-full py-2">
            <ScrollArea.Viewport className="h-full w-full px-2 ">
                <div className=" flex flex-col">
                <Button variant="ghost" size="lg" className="flex justify-start">MDX</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                <Button variant="ghost" size="lg" className="flex justify-start">Zustand</Button>
                    
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
