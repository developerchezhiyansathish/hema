"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { recognition } from "../content/portfolio";

export default function Recognition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="achievements"
      className="pt-32 md:pt-[120px] pb-32 md:pb-[210px] bg-dark-bg px-6 md:px-10 lg:px-20 relative"
    >
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-navigation-label text-primary-container tracking-[0.8em] text-navigation-label"
        >
          {recognition.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-hero-display text-white italic text-4xl md:text-6xl lg:text-8xl mt-6 md:mt-8"
        >
          {recognition.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body-main text-body-main text-outline mt-4 md:mt-6 max-w-3xl mx-auto"
        >
          {recognition.description}
        </motion.p>
      </div>

      <div className="relative mt-12 md:absolute md:bottom-[-30px] w-full md:w-auto left-0 md:left-10 right-0 md:right-10 lg:left-20 lg:right-20 max-w-[1440px] md:mx-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-none mx-auto md:mx-0">
        {recognition.stats.map((award, i) => (
          <motion.div
            key={award.number}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
            className="bg-surface-container-lowest p-8 md:p-10 fine-stone-border text-center"
          >
            <p className="font-section-title text-3xl md:text-4xl text-on-surface">
              {award.number}
            </p>
            <p className="font-navigation-label text-navigation-label text-outline mt-2 uppercase">
              {award.label}
            </p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
