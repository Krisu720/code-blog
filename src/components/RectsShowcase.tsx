"use client";

import useRects from "@/hooks/use-rects";
import React, { useRef } from "react";

const RectsShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [rects] = useRects({ ref: ref });
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div ref={ref} className="bg-red-500 h-96 w-60" />
      <h1 className="text-xs text-balance">{JSON.stringify(rects).split(",").map((item)=>item + "\t\n")}</h1>
    </div>
  );
};

export default RectsShowcase;
