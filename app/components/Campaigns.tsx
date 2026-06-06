"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineCollection,
  HiOutlineSparkles,
} from "react-icons/hi";
import { caseStudies } from "../content/portfolio";

export default function Campaigns() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.35], [50, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 34]);

  return (
    <section
      ref={ref}
      id="work"
      className="py-24 md:py-[140px] px-6 md:px-10 lg:px-20 bg-surface-container-lowest overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto space-y-14 md:space-y-20">
        <motion.div
          style={{ y: headingY }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-20 items-end"
        >
          <div className="space-y-6">
            <span className="font-navigation-label text-navigation-label text-primary-container uppercase">
              Selected Case Studies
            </span>
            <h2 className="font-section-title text-section-title text-on-surface leading-[1.08] max-w-[760px]">
              Campaign stories with motion, craft, and measurable brand impact.
            </h2>
          </div>
          <div className="space-y-6 lg:max-w-[620px] lg:ml-auto">
            <p className="font-body-main text-body-main text-on-surface-variant">
              Explore client-led work across agency leadership, fashion retail,
              cafe content, FMCG product communication, and jewelry storytelling.
              Each case study opens into a dedicated page with campaign context,
              highlights, image galleries, and video assets.
            </p>
            <div className="grid grid-cols-3 border-y border-fine-stone">
              {[
                { value: "05", label: "Clients" },
                { value: "23", label: "Projects" },
                { value: "03", label: "Features" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l border-fine-stone first:border-l-0 px-4 py-5"
                >
                  <p className="font-section-title text-2xl md:text-3xl text-on-surface">
                    {item.value}
                  </p>
                  <p className="font-navigation-label text-[9px] text-outline uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-5 md:gap-6 [column-fill:_balance]">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              style={i === 0 ? { y: imageY } : undefined}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: i * 0.12 }}
              className="mb-5 md:mb-6 break-inside-avoid"
            >
              <Link
                href={`/work/${study.slug}`}
                className="group block fine-stone-border bg-surface-container-lowest overflow-hidden"
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0
                      ? "h-[520px]"
                      : i === 1
                        ? "h-[420px]"
                        : i === 2
                          ? "h-[360px]"
                          : "h-[470px]"
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/25 to-transparent opacity-90" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 bg-surface-container-lowest/90 px-3 py-2 backdrop-blur-sm">
                    <HiOutlineSparkles
                      className="text-primary-container"
                      aria-hidden="true"
                    />
                    <span className="font-navigation-label text-[9px] text-on-surface uppercase">
                      Case Study
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <p className="font-navigation-label text-[10px] text-inverse-primary uppercase">
                      {study.category}
                    </p>
                    <div className="mt-3 flex items-end justify-between gap-5">
                      <h3 className="font-section-title text-4xl md:text-5xl text-inverse-on-surface leading-none">
                        {study.client}
                      </h3>
                      <span className="grid h-11 w-11 shrink-0 place-items-center border border-inverse-primary text-inverse-primary transition-all duration-300 group-hover:bg-inverse-primary group-hover:text-on-surface">
                        <HiOutlineArrowNarrowRight
                          className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-7 space-y-5 transition-colors duration-300 group-hover:bg-soft-linen">
                  <p className="font-body-main text-[15px] leading-[1.75] text-on-surface-variant">
                    {study.headline}
                  </p>

                  <div className="space-y-3 border-t border-fine-stone pt-4">
                    {study.highlights.slice(0, 2).map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <HiOutlineCollection
                          className="mt-1 shrink-0 text-primary-container"
                          aria-hidden="true"
                        />
                        <span className="font-body-caption text-[13px] leading-[1.6] text-on-surface">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
