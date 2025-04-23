"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative top-0 max-w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 h-full">
        <Image
          src="/heroBackground.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition={isMobile ? "left" : "top"}
          alt="Hero"
          loading="lazy"
          className="object-top-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-center h-full w-full px-6">
        <motion.h1
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b
           from-white via-white to-transparent
            mb-4 lg:mb-0 xl:-rotate-90 xl:text-[38px] 2xl:text-[45px] xl:left-[-8%] 2xl:left-[-8.5%] xl:mt-[5%]  xl:absolute"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          Willkommen an der Bosel
        </motion.h1>

        <motion.div
          className="text-white max-w-md text-center xl:text-left xl:left-[14%] xl:mt-10 2xl:mt-30 xl:absolute"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: isMobile ? -10 : 150 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-base lg:text-lg 2xl:text-2xl text-white/90 drop-shadow-sm mb-8">
            Pferde, frische Luft und jede Menge Spaß – auf unserer Reitanlage an der Bosel kannst du die Natur erleben und das Reiten lernen.
          </p>
          <a href="#das">
            <Button className="text-xl">entdecke jetzt</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
