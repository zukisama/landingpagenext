"use client";

import SectionWatermark from "../ui/SectionWatermark";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioCard from "./PortfolioCard";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

export default function PortfolioSlider() {
  const { controls, containerVariants, itemVariants } =
    useSectionAnimation("trigger-portfolio-animation", {
      offsetY: 30,
      stagger: 0.12,
    });

  const projects: PortfolioItem[] = useMemo(
    () => [
      {
        title: "Instalasi Server HP",
        category: "Setup sekaligus Instalasi Server HP Untuk Perusahaan",
        image: "/images/portfolio-2.jpg",
      },
      {
        title: "Instalasi Firewall Fortinet",
        category: "Instalasi Fortinet untuk jaringan perkantoran",
        image: "/images/portfolio-4.jpg",
      },
      {
        title: "Pembuatan Website Company Profile",
        category: "Aplikasi Perusahaan",
        image: "/images/portfolio-3.jpg",
      },
      {
        title: "Live Streaming Hybrid Zoom",
        category: "Acara Hybrid Zoom rapat perusahaan",
        image: "/images/portfolio-5.jpg",
      },
      {
        title: "Penggantian perangkat Router CISCO di perusahaan",
        category: "Penggantian perangkat jaringan CISCO",
        image: "/images/portfolio-7.jpg",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const total = projects.length;

  const clamp = (i: number) => (i + total) % total;
  const next = () => setActive((v) => clamp(v + 1));
  const prev = () => setActive((v) => clamp(v - 1));

  const left = clamp(active);
  const right = clamp(active + 1);

  return (
    <section id="portfolio" className="relative scroll-mt-28 py-28 bg-white overflow-hidden">
      {/* WATERMARK */}
      <SectionWatermark text="Portfolio" />

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-14"
        >
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-widest text-sm text-gray-600 mb-3"
          >
            Popular Projects
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-gray-900"
          >
            Projects Our Completed Projects
          </motion.h2>
        </motion.div>

        {/* DESKTOP (2 cards) */}
        <div className="hidden md:grid grid-cols-2 gap-10 items-center">
          <PortfolioCard item={projects[left]} />
          <PortfolioCard item={projects[right]} />
        </div>

        {/* MOBILE (SLIDE) */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard item={projects[active]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="mt-12 flex items-center justify-end gap-4">
          <button
            onClick={prev}
            className="h-11 w-11 rounded-full border border-gray-300 grid place-items-center hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="h-11 w-11 rounded-full border border-gray-300 grid place-items-center hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
