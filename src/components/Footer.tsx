import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="h-14 container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="font-medium mr-4">
          code<span className="text-primary">Ready</span>
        </Link>
      </div>
      <div className="flex gap-2 items-center">
          <a
          target="_blank"
          href="https://github.com/Krisu720/"
          >
            Built by
            <span
              className="ml-1 underline"
            >
              Krzysztof Wilk
            </span>
          </a>
      </div>
    </div>
  );
};

export default Footer;
