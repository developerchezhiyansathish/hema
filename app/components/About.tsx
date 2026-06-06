"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile, profileHighlights } from "../content/portfolio";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 md:py-[140px] px-6 md:px-10 lg:px-20 bg-surface-container-lowest border-t border-fine-stone"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.92fr)] gap-14 lg:gap-20 xl:gap-24 items-start">
        <div className="space-y-10 md:space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-section-title text-section-title text-on-surface leading-[1.08] max-w-[620px]"
          >
            The Profile Behind <br />
            the Portfolio
          </motion.h2>

          <div className="space-y-0">
            {profileHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className={`grid grid-cols-1 sm:grid-cols-[128px_minmax(0,1fr)] lg:grid-cols-[150px_minmax(0,1fr)] gap-3 sm:gap-8 items-start py-6 md:py-7 ${
                  i < profileHighlights.length - 1 ? "border-b border-fine-stone" : ""
                }`}
              >
                <span className="font-navigation-label text-navigation-label text-primary-container whitespace-nowrap">
                  {item.label}
                </span>
                <div className="max-w-[640px]">
                  <p className="font-body-main text-[17px] leading-[1.55] font-semibold text-on-surface">
                    {item.title}
                  </p>
                  <p className="mt-2 font-body-caption text-[15px] leading-[1.75] text-outline">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-linen px-7 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16 border-l-4 border-primary-container min-h-[440px] lg:min-h-[620px] flex flex-col justify-end"
        >
          <div className="absolute right-8 top-8 hidden h-px w-24 bg-gold-rule md:block" />
          <p className="max-w-[660px] font-body-main text-[20px] md:text-[24px] lg:text-[26px] leading-[1.8] text-on-surface-variant italic">
            &ldquo;{profile.about}&rdquo;
          </p>
          <div className="mt-9 flex items-center gap-5">
            <div className="h-px w-16 bg-primary-container" />
            <span className="font-navigation-label text-navigation-label text-on-surface">
              {profile.name.toUpperCase()}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
