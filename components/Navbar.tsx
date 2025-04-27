"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth < 1524);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      h-[10vh] md:max-h-[12vh] xl:min-h-[14vh] 2xl:min-h-[16vh]
      px-4 sm:px-6 xl:px-20 2xl:px-18 
      ${scrolled ? "bg-primary shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center h-full">
        <Link href="/">
          <motion.div
            animate={{
              scale: scrolled ? 1.5 : 1.7,
              y: scrolled ? 0 : 10,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="origin-left"
          >
            <Image
              src="/Bosel-Logo.webp"
              width={120}
              height={60}
              alt="Bosel Logo"
              loading="lazy"
              className="w-auto h-auto 
                max-h-10
                md:max-h-[38px]
                lg:max-h-[50px]
                xl:max-h-[60px]
                2xl:max-h-[85px]
              "
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 font-medium relative text-sm sm:text-base xl:text-[16px] 2xl:text-xl">
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
                  className={`flex items-center gap-1 transition-colors hover:text-secondary   ${
                    pathname.startsWith(link.href)
                      ? "text-secondary"
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
                      className="absolute left-0 mt-2 bg-primary text-white shadow-xl border border-gold rounded-md w-52 2xl:w-60 z-50"
                    >
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.key}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm 2xl:text-lg hover:bg-secondary hover:text-primary rounded-md transition-colors"
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
                className={`transition-colors hover:text-secondary ${
                  pathname === link.href ? "text-gold" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white cursor-pointer"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
