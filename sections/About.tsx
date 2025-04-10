"use client";

import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="padding-section bg-background text-foreground flex justify-center">
      <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="title-section">Über Uns</h2>
          <p className="my-5 max-w-xl text-muted-foreground leading-relaxed">
            Unser Hof bietet eine Vielzahl an Möglichkeiten für Pferdefreunde. Ob Ausbildung,
            Pension oder Ferien – bei uns erleben Sie die Verbindung von Natur, Tier und Mensch
            hautnah.
          </p>
        </motion.div>

        {/* Video Preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full aspect-video overflow-hidden rounded-lg border-2 border-gold-400 shadow-md">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
