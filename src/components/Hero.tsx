"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function Hero() {
  const {
    controls,
    containerVariants,
    itemVariants,
  } = useSectionAnimation("trigger-hero-animation", {
    offsetY: 40,
    stagger: 0.15,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Corporate Business Meeting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-2xl text-white"
        >
          <motion.p variants={itemVariants} className="uppercase tracking-widest text-sm text-gray-300 mb-4">
            Professional Business Solutions
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Impressive Solutions <br />
            Crafted for Your Goal
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-200 mb-10">
            Dari instalasi jaringan, pengembangan aplikasi sistem
            informasi, CCTV hingga layanan Live Streaming, kami hadir sebagai mitra teknologi terpercaya
            untuk solusi IT tanpa batas.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Get Consultant
            </a>

            <a
              href="#portfolio"
              className="border border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
