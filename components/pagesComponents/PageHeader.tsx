"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function PageHeader({ title }: { title?: string }) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  return (
    <div className="relative h-[28vh] 2xl:h-[44vh] md:h-[38vh]  lg:h-[40vh] text-gold">
      {/* Background Image */}
      <Image
        src="/Natur1.png"
        alt="Header Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Overlay content */}
      <div className="relative gap-3 z-10 flex flex-col items-center justify-between h-full">
        {/* Logo + Title */}
        <div className="flex flex-1 justify-between w-full md:w-[70%]  items-center px-4 md:px-0 md:py-2 mt-2">
          <Link href="/">
            <Image
              src="/Bosel-Logo.png"
              alt="Bosel Logo"
              width={250}
              height={60}
              className="cursor-pointer w-30 2xl:w-70 lg:w-50 md:w-full"
            />
          </Link>
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            >
            {title}
          </motion.h1>
        </div>

        {/* Navigation */}
        <nav
          ref={dropdownRef}
          className="relative w-full bg-primary py-3 px-1 md:px-0 md:py-4 mx-auto flex justify-center gap-4 md:gap-6 flex-wrap"
        >
          {NAV_LINKS.map((link) => (
            <div
              key={link.key}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                onClick={() => toggleDropdown(link.key)}
                className={`flex items-center gap-1 font-medium text-base sm:text-lg transition-colors ${
                  pathname.startsWith(link.href)
                    ? "text-lime-300 underline"
                    : "hover:text-lime-200"
                }`}
              >
                {link.label}
                {link.sublinks && <ChevronDown size={16} />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {activeDropdown === link.key && link.sublinks && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1 -translate-x-1 mt-2 bg-primary border-lime-200 border text-white rounded-lg shadow-lg px-2 py-1 z-50 min-w-fit"
                  >
                    {link.sublinks.map((sublink) => (
                      <Link
                        key={sublink.key}
                        href={sublink.href}
                        className={`block p-1 md:text-lg text-nowrap text-sm rounded hover:bg-lime-200 hover:text-green-800  transition-colors ${
                          pathname === sublink.href ? "font-semibold text-lime-200" : ""
                        }`}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
