"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative top-0 w-full h-screen bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 h-full">
        <Image 
          src="/hero.jpg" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          alt="Hero" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {/* <div className="relative z-10 flex items-center justify-center h-full px-6"> */}
        <div className="relative max-w-full z-10 flex h-full items-center right-12 top-20"> 
          <motion.div
            className="text-center text-white max-w-2xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold sm:text-2xl md:text-[40px] -rotate-90 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-transparent">
              Willkommen bei Bosel
            </h1>
            <div className='absolute left-55 -top-20 flex flex-col items-center w-full gap-12'>
              <p className="mt-4 text-base w-80 pl-2 sm:text-lg md:text-xl text-white/90 drop-shadow-sm">
                Erleben Sie unvergessliche Momente mit unseren Pferden – Natur, Freiheit und Abenteuer warten auf Sie.
              </p>
              <Button className='text-xl '>Events</Button>
            </div>
          </motion.div>
        </div>
          
    </section>
  );
};

export default Hero;
