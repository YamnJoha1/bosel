"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { pageContents } from "@/constants/pagesContents";
import { NAV_LINKS } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const selectedPages = ["reitanlage", "pferdepension", "kontakt"] as const;
type PageKey = typeof selectedPages[number];

const images: Record<PageKey, string> = {
  reitanlage: "/Reitanlage/ra5.webp",
  pferdepension: "/Stallungen/st2.webp",
  kontakt: "/kont.webp",
};

const AUTO_SLIDE_DELAY = 7000;

const AboutSlider = () => {
  const [index, setIndex] = useState(0);
  const total = selectedPages.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_SLIDE_DELAY);
  };

  useEffect(() => {
    resetAutoSlide();
  
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);
  

  const goTo = (i: number) => {
    setIndex(i);
  };

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const currentKey = selectedPages[index];
  const content = pageContents[currentKey];
  const image = images[currentKey];
  const navItem = NAV_LINKS.find((link) => link.key === currentKey);

  return (
    <section className="relative max-container flex flex-col lg:flex-row items-center justify-center bg-backgound padding-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* المحتوى النصي */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentKey}
            className="text-center lg:text-left h-[25vh] lg:h-full lg:block flex flex-col justify-between overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-left">
              <h2 className="title-section text-green-800">{content.title}</h2>
              <p className="text-gray-700 max-w-xl line-clamp-4 leading-relaxed mb-6">
                {content.description}
              </p>


            </div>

            {/* الدوائر */}
            <div className="hidden lg:flex gap-4 justify-start mb-6">
              {selectedPages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    i === index ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Button */}
            {navItem && (
              <Link href={navItem.href}>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="green">Mehr erfahren →</Button>
                </motion.div>
              </Link>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Photo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentKey + "-img"}
            className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image}
              alt={content.title}
              width={600}
              height={400}
              className="object-cover w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* أزرار التمرير */}
      <div className="hidden lg:flex">
        <Button onClick={() => { prev(); resetAutoSlide(); }} variant="outline" size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-green hover:bg-hovergreen hover:text-white/80 text-white p-4 rounded-full shadow border-none">
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>
      <div className="hidden lg:flex">
        <Button onClick={() => { next(); resetAutoSlide(); }} variant="outline" size="icon" 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-green hover:bg-hovergreen hover:text-white/80 text-white p-4 rounded-full shadow border-none">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* للأجهزة الصغيرة */}
      <div className="lg:hidden flex justify-center gap-4 mt-8 items-center">
        <Button onClick={() => { prev(); resetAutoSlide(); }} variant="outline" size="icon"
          className="bg-green hover:bg-hovergreen hover:text-white/80 text-white p-4 rounded-full shadow border-none"  
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-3 items-center">
          {selectedPages.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAutoSlide(); }}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <Button onClick={() => { next(); resetAutoSlide(); }} variant="outline" size="icon"
          className="bg-green hover:bg-hovergreen hover:text-white/80 text-white p-4 rounded-full shadow border-none"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default AboutSlider;