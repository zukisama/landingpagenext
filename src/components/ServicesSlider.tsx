"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LineChart,
  Target,
  ShieldCheck,
  Cloud,
  Settings,
  Code2,
} from "lucide-react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

type ServiceItem = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export default function ServicesSlider() {
  const { controls, containerVariants, itemVariants } =
    useSectionAnimation("trigger-services-animation", {
      offsetY: 30,
      stagger: 0.12,
    });

  const services: ServiceItem[] = useMemo(
    () => [
      {
        title: "Strategy & Planning",
        desc: "Rencana IT end-to-end: kebutuhan, desain solusi, roadmap, dan eksekusi.",
        Icon: LineChart,
      },
      {
        title: "Business Goal",
        desc: "Solusi fokus hasil: efisiensi, skalabilitas, dan penguatan proses bisnis.",
        Icon: Target,
      },
      {
        title: "Network Security",
        desc: "Firewall, VPN, hardening, audit keamanan, serta monitoring proaktif.",
        Icon: ShieldCheck,
      },
      {
        title: "Cloud & Virtualization",
        desc: "Virtualisasi, migrasi, optimasi resource, hingga hybrid cloud.",
        Icon: Cloud,
      },
      {
        title: "Managed Services",
        desc: "Support berkala, monitoring, dan maintenance sistem secara terukur.",
        Icon: Settings,
      },
      {
        title: "System Development",
        desc: "Web app & sistem informasi terintegrasi untuk kebutuhan operasional.",
        Icon: Code2,
      },
    ],
    []
  );

  // ---------- slider state ----------
  const [active, setActive] = useState(1); // start di card kedua agar terlihat “center”
  const total = services.length;

  const clampIndex = (i: number) => (i + total) % total;
  const prev = () => setActive((v) => clampIndex(v - 1));
  const next = () => setActive((v) => clampIndex(v + 1));

  // optional autoplay (hapus kalau tidak mau)
  // useEffect(() => {
  //   const t = setInterval(() => next(), 6000);
  //   return () => clearInterval(t);
  // }, [total]);

  // card indices: left, center, right
  const leftIndex = clampIndex(active - 1);
  const centerIndex = clampIndex(active);
  const rightIndex = clampIndex(active + 1);

  const Card = ({
    item,
    variant,
  }: {
    item: ServiceItem;
    variant: "left" | "center" | "right";
  }) => {
    const isCenter = variant === "center";

    return (
      <motion.div
        layout
        initial={false}
        className={[
          "relative rounded-2xl bg-white border border-gray-100",
          "px-8 py-10 md:px-10 md:py-12",
          "transition-shadow",
          isCenter ? "shadow-xl" : "shadow-sm",
        ].join(" ")}
        whileHover={isCenter ? { y: -4 } : { y: -2 }}
      >
        <div className="flex items-start gap-5">
          <div
            className={[
              "shrink-0 rounded-2xl",
              "h-14 w-14 flex items-center justify-center",
              isCenter ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700",
            ].join(" ")}
          >
            <item.Icon className="h-7 w-7" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>

            <button
              type="button"
              className="mt-7 inline-flex items-center gap-3 text-gray-900 font-semibold"
            >
              <span
                className={[
                  "inline-flex items-center justify-center rounded-full",
                  "h-11 w-11",
                  isCenter ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900",
                ].join(" ")}
              >
                <ArrowRight className="h-5 w-5" />
              </span>
              Read More
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="relative py-28 bg-white overflow-hidden">
      {/* watermark “Services” tipis di atas */}
      <div className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="text-[90px] md:text-[130px] font-extrabold tracking-wider text-gray-900/5">
          Services
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-14"
        >
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-widest text-sm text-gray-600 mb-3"
          >
            Our Service
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-gray-900"
          >
            High Quality Services
          </motion.h2>
        </motion.div>

        {/* slider area */}
        <div className="relative">
          {/* background soft */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white rounded-3xl" />

          <div className="rounded-3xl border border-gray-100 bg-gray-50/60 p-6 md:p-10">
            {/* desktop 3 cards */}
            <div className="hidden lg:grid grid-cols-3 gap-10 items-center">
              <motion.div style={{ opacity: 0.6, transform: "scale(0.96)" }}>
                <Card item={services[leftIndex]} variant="left" />
              </motion.div>

              <motion.div style={{ opacity: 1, transform: "scale(1)" }}>
                <Card item={services[centerIndex]} variant="center" />
              </motion.div>

              <motion.div style={{ opacity: 0.6, transform: "scale(0.96)" }}>
                <Card item={services[rightIndex]} variant="right" />
              </motion.div>
            </div>

            {/* mobile/tablet: 1 card (animate slide) */}
            <div className="lg:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={centerIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card item={services[centerIndex]} variant="center" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* controls */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="h-11 w-11 rounded-full bg-white border border-gray-200 shadow-sm grid place-items-center hover:bg-gray-100 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* dots */}
              <div className="flex items-center gap-3">
                {services.map((_, i) => {
                  const activeDot = i === centerIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      className={[
                        "rounded-full transition",
                        activeDot ? "h-3 w-3 bg-gray-900" : "h-2 w-2 bg-gray-300 hover:bg-gray-400",
                      ].join(" ")}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={next}
                className="h-11 w-11 rounded-full bg-white border border-gray-200 shadow-sm grid place-items-center hover:bg-gray-100 transition"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
