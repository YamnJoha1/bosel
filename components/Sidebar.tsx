"use client";

import { NAV_LINKS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur background */}
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Sidebar */}
          <motion.aside
            ref={sidebarRef}
            className="fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-primary text-white z-50 p-6 flex flex-col gap-6 overflow-y-auto"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x > 100) handleClose();
            }}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/Bosel-Logo.webp"
                  alt="Logo"
                  width={80}
                  height={40}
                  className="h-auto"
                  loading="lazy"
                />
              </Link>
              <button onClick={handleClose} className="text-white hover:text-gold transition-colors cursor-pointer">
                <X size={30} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 mt-6">
              {NAV_LINKS.map((link) => (
                <div key={link.key}>
                  {link.sublinks ? (
                    <>
                      <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(link.key)}>
                        <span className="text-lg font-semibold">{link.label}</span>
                        <ChevronDown className={`transition-transform ${activeDropdown === link.key ? "rotate-180" : ""}`} />
                      </div>
                      <AnimatePresence>
                        {activeDropdown === link.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 flex flex-col gap-2 mt-2"
                          >
                            {link.sublinks.map((sublink) => (
                              <Link 
                                key={sublink.key}
                                href={sublink.href}
                                className="text-base hover:text-gold transition-colors"
                                onClick={handleClose}
                              >
                                - {sublink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`text-lg hover:text-gold transition-colors ${
                        pathname === link.href ? "text-gold" : ""
                      }`}
                      onClick={handleClose}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
