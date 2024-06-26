"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useTimer from "@/hooks/useTimer";

const images = [
  "https://images.unsplash.com/photo-1699192781399-e2275a9f60b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695653422259-8a74ffe90401?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697382803114-0be920c5e160?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687982107-14492010e05e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Slider = () => {
  const { elapsedTime, handlePause, handleReset, handleSet, handleStart } =
    useTimer();

  const [slide, setSlide] = useState(0);

  const TIME_LIMIT = 3000;

  useEffect(() => {
    handleStart();
  }, []);

  useEffect(() => {
    images.map((_, index) => {
      if (elapsedTime >= (index + 1) * TIME_LIMIT) {
        setSlide(index + 1);
        if (index === images.length - 1) {
          handleReset();
          setSlide(0);
        }
      }
    });
  }, [elapsedTime]);
  return (
    <div className="overflow-hidden relative mx-4 my-4 rounded-xl w-full h-full">
      <motion.div
        animate={{ x: -slide * 100 + "%" }}
        transition={{ ease: [0.42, 0.03, 0.45, 0.95] }}
        className="flex"
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-[25rem] w-full flex-shrink-0">
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
                elapsedTime < (index + 1) * TIME_LIMIT &&
                elapsedTime > index * TIME_LIMIT
                  ? 24
                  : 12,
              opacity:
                elapsedTime < (index + 1) * TIME_LIMIT &&
                elapsedTime > index * TIME_LIMIT
                  ? 1
                  : 0.4,
            }}
            className="h-3 w-6 bg-gray-500 rounded-full overflow-hidden"
            onMouseEnter={() => handlePause()}
            onMouseLeave={() => handleStart()}
            onClick={() => {
              setSlide(index);
              handleSet(index * TIME_LIMIT);
            }}
            whileHover={{ opacity: 0.9 }}
          >
            <motion.div
              className="bg-white h-full"
              transition={{ type: "tween", duration: 0.1 }}
              animate={{
                width:
                  elapsedTime < (index + 1) * TIME_LIMIT &&
                  elapsedTime > index * TIME_LIMIT
                    ? (elapsedTime / TIME_LIMIT - slide) * 100 + "%"
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
