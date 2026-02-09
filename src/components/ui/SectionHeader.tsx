"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  center?: boolean;
  variants: any;
};

export default function SectionHeader({
  eyebrow,
  title,
  center = true,
  variants,
}: Props) {
  return (
    <motion.div
      variants={variants}
      className={`${center ? "text-center" : ""} mb-16`}
    >
      <motion.p
        variants={variants}
        className="uppercase tracking-widest text-sm text-gray-500 mb-3"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        variants={variants}
        className="text-3xl md:text-5xl font-extrabold text-gray-900"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
