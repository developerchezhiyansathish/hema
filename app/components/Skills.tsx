"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { IconType } from "react-icons";
import {
  HiOutlineBadgeCheck,
  HiOutlineChartBar,
  HiOutlineClipboardCheck,
  HiOutlineLightningBolt,
  HiOutlinePhotograph,
  HiOutlineShare,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineUsers,
} from "react-icons/hi";
import { competencies, metrics } from "../content/portfolio";

const skillDetails: Record<
  string,
  {
    icon: IconType;
    detail: string;
  }
> = {
  "Social Media Strategy": {
    icon: HiOutlineShare,
    detail: "Platform planning, content direction, and campaign rhythm.",
  },
  "Client Management": {
    icon: HiOutlineUsers,
    detail: "Clear coordination between client goals, teams, and timelines.",
  },
  "Content Creation": {
    icon: HiOutlinePhotograph,
    detail:
      "Scroll-ready concepts shaped for fashion, food, and jewelry brands.",
  },
  "Project Management": {
    icon: HiOutlineClipboardCheck,
    detail: "Shoot planning, approvals, production flow, and delivery control.",
  },
  "Campaign Optimization": {
    icon: HiOutlineTrendingUp,
    detail:
      "Performance review, creative testing, and sharper content funnels.",
  },
  "Growth & Adaptability": {
    icon: HiOutlineLightningBolt,
    detail:
      "Fast learning across brands, formats, seasonal moments, and tools.",
  },
};

const metricIcons = [
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineBadgeCheck,
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="skills"
      className="py-24 md:py-[140px] bg-linen px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1440px] mx-auto space-y-12 md:space-y-16">
        <div className="flex flex-col items-start gap-3 lg:gap-3">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-navigation-label text-navigation-label text-outline"
          >
            CORE COMPETENCIES
          </motion.h3>
          <h2 className="font-section-title text-section-title text-on-surface leading-[1.08]">
            Skillset shaped for brand growth<br/> and polished campaign delivery.
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.28fr_0.72fr] gap-8 lg:gap-10 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {competencies.map((item, i) => {
              const skill = skillDetails[item];
              const Icon = skill.icon;

              return (
                <motion.article
                  key={item}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                  className="group min-h-[220px] bg-surface-container-lowest fine-stone-border p-6 md:p-7 flex flex-col justify-between overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-12 w-12 place-items-center border border-gold-rule bg-soft-linen text-primary-container transition-all duration-300 group-hover:bg-on-surface group-hover:text-inverse-on-surface group-hover:border-on-surface">
                      <Icon className="text-2xl" aria-hidden="true" />
                    </div>
                    <span className="font-navigation-label text-[10px] text-outline transition-colors duration-300 group-hover:text-primary">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-section-title text-[24px] leading-[1.18] text-on-surface">
                      {item}
                    </h4>
                    <p className="font-body-caption text-[14px] leading-[1.7] text-outline">
                      {skill.detail}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {metrics.map((metric, i) => {
              const Icon = metricIcons[i] ?? HiOutlineSparkles;

              return (
                <motion.article
                  key={metric.value}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.12 }}
                  className="group bg-on-surface text-inverse-on-surface p-7 md:p-8 min-h-[190px] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-hero-display text-5xl md:text-6xl italic text-inverse-primary">
                      {metric.value}
                    </span>
                    <Icon
                      className="text-2xl text-inverse-primary transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-7 font-body-main text-[15px] leading-[1.8] text-inverse-on-surface/85">
                    {metric.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.75 }}
          className="grid grid-cols-2 md:grid-cols-4 border-y border-fine-stone"
        >
          {["Strategy", "Shoots", "Content", "Growth"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ backgroundColor: "rgba(184, 150, 62, 0.08)" }}
              className="flex items-center justify-center gap-3 border-fine-stone px-4 py-5 text-center even:border-l md:border-l md:first:border-l-0"
            >
              <HiOutlineSparkles
                className="text-lg text-primary-container"
                aria-hidden="true"
              />
              <span className="font-navigation-label text-[10px] text-on-surface uppercase tracking-[0.35em]">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
