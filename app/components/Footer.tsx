"use client";

import { motion } from "framer-motion";
import { contact } from "../content/portfolio";

const footerLinks = [
  { href: "/#work", label: "WORK" },
  { href: "/#achievements", label: "FEATURES" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer className="bg-linen py-16 md:py-20 border-t border-fine-stone">
      <div className="flex flex-col items-center gap-8 w-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary-container text-4xl select-none"
        >
          *
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-hero-display italic text-2xl tracking-tight text-on-surface"
        >
          Hemapriya Ramesh
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-3 md:gap-8 items-center"
        >
          <a
            href={`mailto:${contact.email}`}
            className="font-navigation-label text-navigation-label text-outline hover:text-primary-container transition-colors duration-300"
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
            className="font-navigation-label text-navigation-label text-outline hover:text-primary-container transition-colors duration-300"
          >
            {contact.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-8 md:gap-10"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-navigation-label text-navigation-label text-outline hover:underline decoration-primary-container underline-offset-8 transition-all duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-navigation-label text-navigation-label text-outline-variant mt-4"
        >
          © HEMAPRIYA RAMESH PORTFOLIO
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-navigation-label text-navigation-label text-outline-variant"
        >
          Designed and developed by{' '}
          <a
            href="https://chezhiyansathish.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-navigation-label text-navigation-label text-on-surface hover:text-primary-container underline"
          >
            Chezhiyansathish
          </a>
        </motion.p>
      </div>
    </footer>
  );
}
