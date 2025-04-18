"use client";

import Image from "next/image";
import FeatureCard from "../components/Home/FeatureCard";
import { motion } from "framer-motion";
import { FEATURES_CARD_CONTENT } from "@/constants";

const Features = () => {
  return (
    <section className="relative padding-section text-white bg-green-800/80 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/home-bosel.jpg"
          alt="Hintergrund"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-container flex flex-col items-center text-center">
        <motion.h2
          className="title-section text-white z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reiterferien
        </motion.h2>

        <motion.p
          className="my-5 max-w-3xl text-white/90 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Ab ins Abenteuer! Jetzt mitmachen
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {FEATURES_CARD_CONTENT.map((item, i) => (
            <FeatureCard
              key={i}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
