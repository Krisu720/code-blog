"use client";

import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";
import { Input } from "./ui/input";
import { ReactNode, useState } from "react";

const CopyInput = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative border p-4 rounded my-2">
      {/* <Input className="" value={value} readOnly /> */}
      {value}
      <Button
        variant="ghost"
        size="copy"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={() => handleCopy()}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default CopyInput;
