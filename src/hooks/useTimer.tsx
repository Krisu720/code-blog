'use client'

import { useState, useRef, useEffect } from "react";

const useTimer = (initialState = 0) => {
  const [elapsedTime, setElapsedTime] = useState(initialState);
  const [isRunning, setIsRunning] = useState(false);
  const [startedDate, setStartedDate] = useState<number | null>(null);
  const countRef = useRef<NodeJS.Timeout | null>(null);
  const [checkpoint, setCheckpoint] = useState<number[] | null>(null);
  const [tran, setTran] = useState<number[] | null>(null);

  useEffect(() => {
    if (startedDate && isRunning && !checkpoint) {
      countRef.current = setInterval(() => {
        const endTime = Date.now();
        const timeElapsed = endTime - startedDate;
        setElapsedTime(timeElapsed);
      }, 1);
      setIsRunning(true);
    }
    if (startedDate && isRunning && tran) {
      countRef.current = setInterval(() => {
        const endTime = Date.now();
        const timeElapsed = endTime - startedDate - tran.reduce((a, b) => b+a, 0);
        setElapsedTime(timeElapsed);
      }, 1);
      setIsRunning(true);
    }
    return () => {
      countRef.current && clearInterval(countRef.current);
    };
  }, [startedDate, isRunning]);

  const handleStart = () => {
    if (checkpoint) {
      setTran((prev) => {
        if (prev) {
          return [...prev, Date.now() - checkpoint[checkpoint.length - 1]];
        } else {
          return checkpoint.map((item) => Date.now() - item);
        }
      });
    }
    setIsRunning(true);
    if (!startedDate) setStartedDate(Date.now());
  };

  const handlePause = () => {
    setIsRunning(false);
    countRef.current && clearInterval(countRef.current);
    setCheckpoint((prev) => {
      if (prev) {
        return [...prev, Date.now()];
      } else {
        return [Date.now()];
      }
    });
  };

  const handleReset = () => {
    setElapsedTime(0);
    setCheckpoint(null);
    setTran(null);
    setStartedDate(Date.now());
  }

  const handleSet = (time: number) => {
    setElapsedTime(time);
    setStartedDate(Date.now()-time);
    setCheckpoint(null);
    setTran(null);
  }

  return { elapsedTime, isRunning, handleStart, handlePause,handleReset,handleSet };
};

export default useTimer;