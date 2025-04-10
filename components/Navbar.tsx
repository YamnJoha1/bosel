"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (key: string) =>
    setActiveDropdown(activeDropdown === key ? null : key);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 px-16 sm:p-0  ${
        scrolled ? "bg-primary bg-opacity-95 shadow-md h-[18vh] max-h-[22vh] -mt-5 px-20" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-14 sm:px-10 sm:py-4">
        {/* Logo with smooth motion */}
        <Link href="/">
          <motion.div
            animate={{
              scale: scrolled ? 0.8 : 1,
              y: scrolled ? 0 : 10,
              x: scrolled ? 0 : 20,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="origin-left px-15"
          >
            <Image
              src="/Bosel-Logo.png"
              width={120}
              height={60}
              alt="Bosel Logo"
              className="w-auto h-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 sm:gap-6 font-medium relative">
          {NAV_LINKS.map((link) =>
            link.sublinks ? (
              <div
                key={link.key}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 transition-colors hover:text-lime-200 ${
                    pathname.startsWith(link.href)
                      ? "text-lime-200"
                      : "text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={16} />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === link.key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 bg-primary text-white shadow-xl border border-lime-200 rounded-md w-52 py-2 z-50"
                    >
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.key}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm hover:bg-lime-200 hover:text-primary rounded-md transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                className={`transition-colors hover:text-lime-200 ${
                  pathname === link.href ? "text-lime-200" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-green-800/20 shadow-inner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {NAV_LINKS.map((link) =>
              link.sublinks ? (
                <div key={link.key} className="flex flex-col gap-1">
                  <button
                    onClick={() => toggleDropdown(link.key)}
                    className="flex justify-between items-center text-lg font-medium text-white cursor-pointer transition-colors hover:text-gold-500"
                  >
                    {link.label}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        activeDropdown === link.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 flex flex-col gap-2"
                      >
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.key}
                            href={sublink.href}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                            className={`text-base transition-colors hover:text-gold-500 text-white ${
                              pathname === sublink.href
                                ? "text-gold-600"
                                : "text-white"
                            }`}
                          >
                            - {sublink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-gold-500 text-white ${
                    pathname === link.href ? "text-gold-600" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
