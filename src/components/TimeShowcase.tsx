"use client";

import useTimer from "@/hooks/useTimer";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TimeShowcase = () => {
  const {
    elapsedTime,
    handlePause,
    handleReset,
    handleSet,
    handleStart,
    isRunning,
  } = useTimer(0);

  const [value, setValue] = useState<string>("");

  return (
    <div className="">
      <h1 className="text-center">
        time: {elapsedTime}, running: {isRunning ? "true" : "false"}
      </h1>
      <div className="flex gap-2 items-center mt-2">
        <Button onClick={() => handleStart()}>Start</Button>
        <Button onClick={() => handlePause()}>Pause</Button>
        <Button onClick={() => handleReset()}>Reset</Button>
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => {handleSet(parseInt(value));setValue("")}}>Set</Button>
      </div>
    </div>
  );
};

export default TimeShowcase;
