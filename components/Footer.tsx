"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20 shadow-inner pt-6 md:pt-10">
      <div className="max-container grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="">
            <Image
              src="/Bosel-Logo.png"
              width={150}
              height={30}
              alt="logo"
            />
          </Link>          
          <p className="text-sm text-muted mt-5">
          Erlebe unvergessliche Reiterferien, tolle Reitmöglichkeiten und professionelle Pferdepension auf unserer Reitsportanlage mitten in der Natur.          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gold-500 mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm hover:text-gold-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-semibold text-gold-500 mb-2">{FOOTER_CONTACT_INFO.title}</h3>
          <ul className="text-sm space-y-1">
            {FOOTER_CONTACT_INFO.links.map(({ label, value }) => (
              <li key={label}>
                <span className="text-muted-backgound">{label}:</span>{" "}
                <span className="text-white">{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex gap-3 w-20">
            {SOCIALS.links.map((icon, i) => (
              <Image key={i} src={icon} alt="social" width={24} height={24} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="text-center text-sm text-muted-backgound mt-15">
        © {new Date().getFullYear()} Scripto. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
