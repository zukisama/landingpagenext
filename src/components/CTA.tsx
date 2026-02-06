"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function CTA() {
  const { controls, containerVariants, itemVariants } =
    useSectionAnimation("trigger-cta-animation", {
      offsetY: 30,
      stagger: 0.15,
    });

  return (
    <section
      id="contact"
      className="
        relative
        scroll-mt-28
        py-28
        overflow-hidden
        z-20
      "
    >
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black pointer-events-none" />

      {/* DECORATIVE BLUR */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* WATERMARK */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2">
        <span className="text-[120px] md:text-[160px] font-extrabold tracking-widest text-white/5">
          Contact
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          >
            Let’s Build Something <br className="hidden md:block" />
            Great Together
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Diskusikan kebutuhan IT Anda bersama kami — mulai dari
            perencanaan, infrastruktur, hingga pengembangan sistem
            yang scalable dan aman.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-4
                px-8 py-4 rounded-full
                bg-white text-gray-900
                font-semibold
                hover:bg-gray-200
                transition
              "
            >
              Get Free Consultation
              <span className="h-10 w-10 rounded-full bg-gray-900 text-white grid place-items-center">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
