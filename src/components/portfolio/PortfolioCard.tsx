"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

export default function PortfolioCard({
  item,
}: {
  item: PortfolioItem;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-2xl shadow-md bg-white"
    >
      {/* Image */}
      <div className="relative h-[320px] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay card */}
      <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl px-6 py-4 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600">{item.category}</p>
      </div>
    </motion.div>
  );
}
