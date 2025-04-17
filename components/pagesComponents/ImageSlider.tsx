"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageSliderProps = {
  images: string[];
  interval?: number;
};

export const ImageSlider = ({ images, interval = 4000 }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isInteracting, setIsInteracting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % images.length);
    resetInteractionTimer();
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetInteractionTimer();
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? "right" : "left");
    setCurrent(index);
    resetInteractionTimer();
  };
  
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    const offsetX = info.offset.x;
    const threshold = 100;
    if (offsetX > threshold) prevSlide();
    else if (offsetX < -threshold) nextSlide();
    else resetInteractionTimer();
  };

  // Auto slide only if not interacting
  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      setDirection("right");
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isInteracting, interval, images.length]);

  const resetInteractionTimer = () => {
    setIsInteracting(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 10000); 
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Slider Main */}
      <div className="relative overflow-hidden rounded-2xl shadow-md h-[250px] sm:h-[400px] md:h-[500px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={images[current]}
            className="absolute w-full h-full"
            custom={direction}
            initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={images[current]}
              alt={`Bild ${current + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover rounded-2xl"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-green-800 p-2 rounded-full shadow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-green-800 p-2 rounded-full shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center flex-wrap gap-2">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            width={100}
            height={70}
            onClick={() => goToSlide(idx)}
            className={`object-cover rounded-md cursor-pointer transition-all duration-300 border-2 ${
              current === idx ? "border-green-600" : "border-transparent opacity-70 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
