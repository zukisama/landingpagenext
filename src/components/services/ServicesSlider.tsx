"use client";

import SectionWatermark from "../ui/SectionWatermark";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Cloud,
  LineChart,
  Settings,
  Code2,
  Target,
} from "lucide-react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

type Service = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

/* =============================
   CARD COMPONENT (HARUS DI LUAR)
============================= */
function ServiceCard({
  item,
  focus,
  variants,
}: {
  item: Service;
  focus?: boolean;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6 }}
      className={[
        "bg-white rounded-2xl border border-gray-100",
        "px-8 py-10 transition-all",
        focus ? "shadow-2xl" : "shadow-md opacity-70 scale-[0.96]",
      ].join(" ")}
    >
      <div className="flex items-start gap-5">
        <div
          className={[
            "h-14 w-14 rounded-2xl flex items-center justify-center",
            focus ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700",
          ].join(" ")}
        >
          <item.Icon className="h-7 w-7" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            {item.desc}
          </p>

          <button className="mt-7 inline-flex items-center gap-3 font-semibold text-gray-900">
            <span
              className={[
                "h-10 w-10 rounded-full grid place-items-center",
                focus ? "bg-gray-900 text-white" : "bg-gray-100",
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
}

/* =============================
   MAIN SLIDER
============================= */
export default function ServiceSlider() {
  const {
    controls,
    containerVariants,
    itemVariants,
  } = useSectionAnimation("trigger-services-animation", {
    offsetY: 30,
    stagger: 0.12,
  });

  const services: Service[] = useMemo(
    () => [
      {
        title: "Strategy & Planning",
        desc: "Perencanaan IT strategis dari kebutuhan hingga roadmap implementasi.",
        Icon: LineChart,
      },
      {
        title: "Business Goal",
        desc: "Solusi teknologi yang selaras dengan tujuan dan KPI bisnis.",
        Icon: Target,
      },
      {
        title: "Network Security",
        desc: "Firewall, VPN, hardening, audit keamanan, dan monitoring.",
        Icon: ShieldCheck,
      },
      {
        title: "Cloud & Virtualization",
        desc: "Virtualisasi server, cloud, dan optimasi infrastruktur.",
        Icon: Cloud,
      },
      {
        title: "Managed Services",
        desc: "Support, maintenance, dan monitoring sistem berkelanjutan.",
        Icon: Settings,
      },
      {
        title: "System Development",
        desc: "Pengembangan web app & sistem informasi terintegrasi.",
        Icon: Code2,
      },
    ],
    []
  );

  const [active, setActive] = useState(1);
  const total = services.length;

  const clamp = (i: number) => (i + total) % total;
  const prev = () => setActive((v) => clamp(v - 1));
  const next = () => setActive((v) => clamp(v + 1));

  const left = clamp(active - 1);
  const center = clamp(active);
  const right = clamp(active + 1);

  return (
  <section
    id="services"
    className="
      relative
      scroll-mt-28
      bg-white
      py-28
      z-20
    "
  >
    {/* watermark */}
    <SectionWatermark text="Services" />

    <div className="relative max-w-7xl mx-auto px-6">
      {/* HEADER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="text-center mb-16"
      >
        <motion.p
          variants={itemVariants}
          className="uppercase tracking-widest text-sm text-gray-500 mb-3"
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

      {/* SLIDER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-3 gap-10 items-center">
          <ServiceCard item={services[left]} variants={itemVariants} />
          <ServiceCard item={services[center]} focus variants={itemVariants} />
          <ServiceCard item={services[right]} variants={itemVariants} />
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={center}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <ServiceCard
                item={services[center]}
                focus
                variants={itemVariants}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <button
            onClick={prev}
            className="h-11 w-11 rounded-full border bg-white hover:bg-gray-100 transition"
          >
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="h-11 w-11 rounded-full border bg-white hover:bg-gray-100 transition"
          >
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

}
