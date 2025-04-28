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

  const handleClose = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

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
    </header>
  );
};

export default Navbar;
