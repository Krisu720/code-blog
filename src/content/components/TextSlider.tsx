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

const CustomComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full flex items-center ml-12">
      <h1 className="text-6xl font-bold max-w-2xl leading-12 text-white">
        {children}
      </h1>
    </div>
  );
};
const images: ImageWithComponent[] = [
  {
    element: (
      <CustomComponent>
        Poznaj nowe możliwości używając lornetki naszej marki.
      </CustomComponent>
    ),
    url: "https://images.unsplash.com/photo-1699192781399-e2275a9f60b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    element: (
      <CustomComponent>
        Dostarczaj jedzenie z Uber Eats i zarabiaj pieniądze na swoim biznesie.
      </CustomComponent>
    ),
    url: "https://images.unsplash.com/photo-1695653422259-8a74ffe90401?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    element: (
      <CustomComponent>
        Wypożycz sprzęt w każdym zakątku świata.
      </CustomComponent>
    ),
    url: "https://images.unsplash.com/photo-1697382803114-0be920c5e160?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    element: (
      <CustomComponent>
        Spełniaj swoje marzenia z pomocą naszych usług pożyczkowych.
      </CustomComponent>
    ),
    url: "https://images.unsplash.com/photo-1682687982107-14492010e05e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

type ImageWithComponent = {
  url: string;
  element?: JSX.Element;
};

const TextSlider = () => {
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
      <div className="overflow-hidden relative mx-4 my-4 rounded-xl h-full w-full">
        <motion.div
          animate={{ x: -slide * 100 + "%" }}
          transition={{ ease: [0.42, 0.03, 0.45, 0.95] }}
          className="flex"
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-[35rem] w-full flex-shrink-0">
              <Image alt="" fill src={image.url} className="object-cover" />
              <AnimatePresence>
                {image.element && slide === index && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    transition={{
                      delay: 0.18,
                      duration: 0.6,
                      ease: [0.52, 0.54, 0, 1.03],
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    style={{ translateY: "-50%" }}
                    className="absolute top-1/2 w-full h-full"
                  >
                    {image.element}
                  </motion.div>
                )}
              </AnimatePresence>
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

export default TextSlider;