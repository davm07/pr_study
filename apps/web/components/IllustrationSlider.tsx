"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, use } from "react";
import Image from "next/image";

export default function IllustrationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/study-1.svg",
    "/study-2.svg",
    "/study-3.svg",
    "/study-4.svg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return;
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]!}
            alt="Ilustración"
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
