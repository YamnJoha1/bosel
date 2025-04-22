"use client";

import { useEffect, useRef, useState } from "react";
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
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 max-w-full
        ${scrolled ? "bg-primary shadow-md" : "bg-transparent xl:pl-20 2xl:pl-20"}
        h-[10vh] md:max-h-[12vh] lg:min-h-[12vh] 2xl:min-h-[15vh]
        px-4 sm:px-6 xl:px-16 2xl:px-20
      `}
    >
      <div className="flex justify-between items-center h-full">
        <Link href="/">
          <motion.div
            animate={{
              scale: scrolled ? 1.5 : 1.65,
              y: scrolled ? 0 : 10,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="origin-left"
          >
            <Image
              src="/Bosel-Logo.png"
              width={120}
              height={60}
              alt="Bosel Logo"
              loading="lazy"
              className="w-auto h-auto 
                max-h-10
                sm:max-h-10
                md:max-h-[38px]
                lg:max-h-[40px]
                xl:max-h-[55px]
                2xl:max-h-[80px]
              "
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-medium relative text-sm sm:text-base xl:text-[17px] 2xl:text-xl">
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
                <AnimatePresence>
                  {activeDropdown === link.key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 bg-primary text-white shadow-xl border border-lime-200 rounded-md w-52 z-50"
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
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            ref={sidebarRef}
            className="fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-green-800 text-white shadow-lg z-50 p-6 pt-3 flex flex-col gap-6 overflow-y-auto md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/Bosel-Logo.png"
                alt="Bosel Logo"
                width={70}
                height={50}
                className="h-auto"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white"
              >
                <X size={28} />
              </button>
            </div>

            {NAV_LINKS.map((link) =>
              link.sublinks ? (
                <div key={link.key} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <Link
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                      }}
                      className="text-lg font-medium hover:text-gold-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => toggleDropdown(link.key)}
                      className="text-white hover:text-gold-500"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform cursor-pointer ${
                          activeDropdown === link.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {activeDropdown === link.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 flex flex-col gap-2 mt-1"
                      >
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.key}
                            href={sublink.href}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                            className={`text-base transition-colors hover:text-gold-500 ${
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
                  className={`text-lg font-medium transition-colors hover:text-gold-500 ${
                    pathname === link.href ? "text-gold-600" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
