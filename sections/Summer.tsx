"use client";

import React from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Summer = () => {
  return (
    <main className="padding-section grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left px-4 md:px-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="title-section text-orange-400">Summer Camp</h2>
        <p className="my-5 max-w-xl mx-auto md:mx-0 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, architecto rerum porro! Perspiciatis consequatur
          voluptatem et, in nihil unde minus alias? Unde quae dolorem ut ullam
          similique perferendis voluptatibus facilis, dolor laborum, ea natus facere.
        </p>

        <div className="mt-8 flex flex-col gap-4 items-center md:items-start">
          <Button variant="outline" className="border-orange-300 text-sm sm:text-base">
            Contact Mr. Jone for more info
            <span className="ml-2 text-orange-500 font-semibold">0173/6062203</span>
          </Button>
          <Button variant="outline" className="border-orange-300 text-sm sm:text-base">
            Contact Mr. Jone for horse riding
            <span className="ml-2 text-orange-500 font-semibold">0173/6062203</span>
          </Button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/sam.jpg"
          width={545}
          height={400}
          alt="summer"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </main>
  );
};

export default Summer;
