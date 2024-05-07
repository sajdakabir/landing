"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import Link from "next/link";
import Twitter from "./icons/Twitter";

const CommandHandler = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        className="text-sm rounded-full px-3 py-1 border-[1px] border-[#2a2c31] bg-[#4d4d4d0a] text-text-hover"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Reach out" className="text-dull-text mt-4">
          <CommandItem>
            <Link href="https://google.com">Schedule a demo</Link>
          </CommandItem>
          <CommandItem>On Boarding call</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Read" className="text-dull-text mt-2">
          <CommandItem>Journals</CommandItem>
          <CommandItem>Changelog</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Social" className="text-dull-text mt-2">
          <CommandItem>
            <Link href="https://google.com" className="flex flex-grow">
              <Twitter size={10} />
              <span className="opacity-0">.</span>
            </Link>
          </CommandItem>
          <CommandItem>LinkedIn</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandHandler;
