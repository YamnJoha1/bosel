"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";


const VideoSection = () => {
  return (
    <section className="padding-section bg-background text-foreground flex justify-center">
      <div  className="max-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="das">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title-section" >Über Uns</h2>
          <p className="my-5 max-w-xl text-muted-foreground leading-relaxed">
          Wir sind die Reitanlage Bosel, die eine spezialisierte Einrichtung für die Ausbildung und Betreuung von Pferden. Unsere Anlage bietet eine ideale Umgebung für Reitsportbegeisterte, in einer ruhigen, natürlichen Umgebung. Wir verfügen über moderne Stallungen, gut ausgestattete Trainingsplätze und sichere Reitwege, die sowohl für das Pferd als auch für den Reiter höchsten Komfort bietet. 
          Ob Anfänger oder Profi – wir bieten individuelles Training mit erfahrenen Trainern sowie erstklassige Pferdebetreuungsdienste. Unser Ziel ist es, eine unterstützende Umgebung für Pferdeliebhaber zu schaffen, in der Leidenschaft und Professionalität aufeinandertreffen und ein einzigartiges Reiterlebnis ermöglichen.
          Besuch uns und erlebe  die Faszination des Reitsports! 
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


export default function AboutPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  return (
    <main>
      <VideoSection />
    </main>
  );
}