"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
const images = [
  "https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1698139997949-cabc360cd5d6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697541283989-bbefb5982de9?auto=format&fit=crop&q=80&w=2127&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682918616433-4707c1c875a6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686580433-2af05ee670ad?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function ProductCarousell() {
  const [slide, setSlide] = useState<number>(0);
  const constrainsRef = useRef<HTMLDivElement>(null);

  const left = () => {
    if (slide !== 0) {
      setSlide((prev) => prev - 1);
    }
  };

  const right = () => {
    if (slide + 1 !== images.length) {
      setSlide((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="w-80 border relative group">
        <div
          className="overflow-hidden h-96 w-full relative"
          ref={constrainsRef}
        >
          <motion.div
            drag="x"
            initial={{ opacity: 0 }}
            animate={{ x: slide * -100 + "%", opacity: 1 }}
            onDragEnd={(e, i) => {
              i.velocity.x > 500 || i.velocity.x < -500
                ? i.velocity.x > 0
                  ? left()
                  : right()
                : undefined;
              console.log(e, i);
            }}
            dragConstraints={
              constrainsRef.current
                ? {
                    left:
                      -constrainsRef.current.getBoundingClientRect().width *
                      slide,
                    right:
                      -constrainsRef.current.getBoundingClientRect().width *
                      slide,
                  }
                : undefined
            }
            dragMomentum={false}
            dragElastic={1}
            transition={{ ease: [0.32, 0.72, 0, 1] }}
            className="flex h-full"
          >
            {images.map((img, index) => (
              <div key={index} className="relative h-full w-full flex-shrink-0">
                <Image
                  onDragStart={(e) => e.preventDefault()}
                  className="object-contain"
                  src={img}
                  alt={img}
                  fill
                />
              </div>
            ))}
          </motion.div>
        </div>
          <Button
            className="py-4 top-1/2 left-5 -translate-y-1/2 px-2 hidden  absolute  group-hover:flex"
            size="icon"
            disabled={slide === 0}
            onClick={() => left()}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className="py-4 top-1/2 right-5 -translate-y-1/2 px-2 hidden  absolute  group-hover:flex"
            size="icon"
            disabled={slide + 1 === images.length}
            onClick={() => right()}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
      </div>
    </>
  );
}
