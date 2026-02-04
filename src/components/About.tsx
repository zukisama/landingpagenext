"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function About() {
  const {
    controls,
    containerVariants,
    itemVariants,
  } = useSectionAnimation("trigger-about-animation", {
    offsetY: 30,
    stagger: 0.12,
  });

  return (
    <section id="about" className="relative py-28 bg-white scroll-mt-23 overflow-hidden">
      {/* Watermark */}
      <div className="pointer-events-none select-none absolute top-10 left-0">
        <span className="text-[120px] md:text-[160px] font-extrabold tracking-widest text-gray-900/5">
          ABOUT US
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.p variants={itemVariants} className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            About Our Company
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
            Empowering Your Business <br />
            Through Smart Technology
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 mb-8 max-w-xl">
            Integrasi Digital Network adalah mitra teknologi yang berfokus
            pada solusi IT terintegrasi, mulai dari infrastruktur jaringan,
            sistem informasi, hingga transformasi digital berkelanjutan.
          </motion.p>

          <motion.ul variants={itemVariants} className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
              Tim profesional dengan pengalaman enterprise
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
              Solusi IT yang scalable dan aman
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
              Pendekatan konsultatif dan berorientasi hasil
            </li>
          </motion.ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          <motion.div variants={itemVariants} className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about-main.jpg"
              alt="About Company"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white z-10 hidden md:block"
          >
            <Image
              src="/images/about-small.avif"
              alt="Team Discussion"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
