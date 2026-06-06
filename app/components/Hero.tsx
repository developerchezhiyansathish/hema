"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { heroStats, profile } from "../content/portfolio";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto overflow-visible md:overflow-hidden"
    >
      <div className="w-full md:w-[55%] flex flex-col justify-center items-start space-y-8 z-10 py-12 md:py-0">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-navigation-label text-navigation-label text-primary-container uppercase leading-[1.35] tracking-[0.30em] md:leading-[1] md:tracking-[0.45em]"
        >
          {profile.role} | {profile.location}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-hero-display text-[60px] md:text-hero-display text-on-surface italic leading-[1.35] md:leading-[1.1]"
        >
          Hemapriya
          <br />
          Ramesh.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body-main text-body-main text-on-surface-variant max-w-2xl"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-8 md:gap-12 py-8 border-y border-fine-stone w-full"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            >
              <p className="font-section-title text-[28px] md:text-[32px] text-on-surface">
                {stat.value}
              </p>
              <p className="font-body-caption text-outline uppercase text-[10px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex gap-8 pt-4"
        >
          <a
            href="#work"
            className="font-navigation-label text-navigation-label text-on-surface uppercase border-b border-primary-container pb-2 hover:tracking-[0.5em] transition-all duration-500"
          >
            View Case Studies
          </a>
          <a
            href="#contact"
            className="font-navigation-label text-navigation-label text-outline uppercase hover:text-on-surface transition-colors duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full md:w-[45%] mt-8 md:mt-0 relative flex justify-center md:justify-end"
      >
        <div className="relative w-full max-w-md">
          <div className="corner-bracket top-[-10px] left-[-10px] border-t-2 border-l-2" />
          <div className="corner-bracket bottom-[-10px] right-[-10px] border-b-2 border-r-2" />
          <div className="absolute right-[-24px] top-0 h-full w-[2px] bg-primary-container opacity-30 hidden md:block" />

          <Image
            src="/images/hema-banner-image.webp"
            alt="Portrait of Hemapriya Ramesh"
            width={480}
            height={600}
            className="w-full aspect-[4/5] object-cover grayscale-[20%]"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-navigation-label text-[10px] text-outline animate-gentle-pulse uppercase tracking-[0.6em] hidden md:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}
