"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type TimerHookProps = {
  initialTime?: number;
};

type TimerHookResult = {
  currentTime: number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  setTimer: (time: number) => void;
};

const useTimer = ({ initialTime }: TimerHookProps): TimerHookResult => {
  const [currentTime, setCurrentTime] = useState(initialTime ? initialTime : 0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;

    if (running) {
      timerId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1);
    } else {
      clearInterval(timerId);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [running]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setCurrentTime(0);
  };
  const setTimer = (time: number) => {
    setCurrentTime(time);
  };

  return { currentTime, startTimer, stopTimer, resetTimer, setTimer };
};

const images = [
  "https://images.unsplash.com/photo-1699192781399-e2275a9f60b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695653422259-8a74ffe90401?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697382803114-0be920c5e160?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687982107-14492010e05e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Slider = () => {
  const { currentTime, startTimer, stopTimer, resetTimer, setTimer } = useTimer(
    {
      initialTime: 0,
    }
  );

  const [slide, setSlide] = useState(0);

  const TIME_LIMIT = 800;

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    images.map((_, index) => {
      if (currentTime === (index + 1) * TIME_LIMIT) {
        setSlide(index + 1);
        if (index === images.length - 1) {
          resetTimer();
          setSlide(0);
        }
      }
    });
  }, [currentTime]);
  return (
    <div className="overflow-hidden relative mx-4 my-4 rounded-xl w-full h-full">
      <motion.div
        animate={{ x: -slide * 100 + "%" }}
        transition={{ ease: [0.42, 0.03, 0.45, 0.95] }}
        className="flex"
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-[35rem] w-full flex-shrink-0">
            <Image alt="" fill src={image} className="object-cover" />
          </div>
        ))}
      </motion.div>
      <div className="flex gap-1 absolute left-1/2 bg-black/50 rounded-full p-2 -translate-x-1/2 bottom-5">
        {images.map((_, index) => (
          <motion.button
          key={index}
            animate={{
              width:
                currentTime < (index + 1) * TIME_LIMIT &&
                currentTime > index * TIME_LIMIT
                  ? 24
                  : 12,
              opacity:
                currentTime < (index + 1) * TIME_LIMIT &&
                currentTime > index * TIME_LIMIT
                  ? 1
                  : 0.4,
            }}
            className="h-3 w-6 bg-gray-500 rounded-full overflow-hidden"
            onMouseEnter={() => stopTimer()}
            onMouseLeave={() => startTimer()}
            onClick={() => {
              setSlide(index);
              setTimer(index * TIME_LIMIT);
            }}
            whileHover={{ opacity: 0.9 }}
          >
            <motion.div
              className="bg-white h-full"
              transition={{ type: "tween", duration: 0.1 }}
              animate={{
                width:
                  currentTime < (index + 1) * TIME_LIMIT &&
                  currentTime > index * TIME_LIMIT
                    ? (currentTime / TIME_LIMIT - slide) * 100 + "%"
                    : 0,
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
