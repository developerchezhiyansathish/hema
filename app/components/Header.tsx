"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#work", label: "WORK" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#achievements", label: "ACHIEVEMENTS" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    const href = e.currentTarget.getAttribute("href");
    const hash = href?.startsWith("/#") ? href.slice(1) : href;
    if (hash?.startsWith("#") && window.location.pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 lg:px-20 h-20 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm border-b border-fine-stone"
            : "bg-ivory border-b border-fine-stone"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-hero-display italic text-xl tracking-tight text-on-surface"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Hemapriya Ramesh
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="font-navigation-label text-navigation-label text-outline hover:text-primary-container transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          onClick={handleNavClick}
          className="hidden md:block bg-on-surface text-on-primary font-navigation-label text-[10px] px-8 py-3 uppercase tracking-widest hover:bg-primary-container transition-colors duration-500"
        >
          Inquire
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1px] bg-on-surface origin-center transition-all"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[1px] bg-on-surface"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-6 h-[1px] bg-on-surface origin-center transition-all"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="font-navigation-label text-navigation-label text-on-surface hover:text-primary-container transition-colors uppercase text-sm tracking-[0.45em]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4 bg-on-surface text-on-primary font-navigation-label text-[10px] px-10 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors duration-500"
              >
                Inquire
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
