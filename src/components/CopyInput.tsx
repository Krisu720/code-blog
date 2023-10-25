"use client";

import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";
import { Input } from "./ui/input";
import { ReactNode, useState } from "react";
import useLocalStorage from "@/hooks/use-local-storage";
import { CodeReadySettings } from "@/types/global";
import { installPrefix } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

const CopyInput = ({
  value,
  install,
}: {
  value: string;
  install?: boolean;
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const { values } = useLocalStorage<CodeReadySettings>({
    key: "codeReadySettings",
  });

  let sentence:string="";

  if (values) {
    sentence = values.packageManager + " " + (install ? installPrefix(values.packageManager) + " " : "") + value;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(sentence);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return values ? (
    <div className="relative border p-4 rounded my-2">
      {/* <Input className="" value={value} readOnly /> */}

      {sentence}
      <Button
        variant="ghost"
        size="copy"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={() => handleCopy()}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  ) : (
    <Skeleton className="relative h-16 rounded my-2" />
  );
};

export default CopyInput;
