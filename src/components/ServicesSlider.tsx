"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceItem = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export default function ServiceCard({
  item,
  variant,
}: {
  item: ServiceItem;
  variant: "left" | "center" | "right";
}) {
  const isCenter = variant === "center";

  return (
    <motion.div
      layout
      initial={false}
      className={[
        "relative rounded-2xl bg-white border border-gray-100",
        "px-8 py-10 md:px-10 md:py-12 transition-shadow",
        isCenter ? "shadow-xl" : "shadow-sm",
      ].join(" ")}
      whileHover={isCenter ? { y: -4 } : { y: -2 }}
    >
      <div className="flex items-start gap-5">
        <div
          className={[
            "shrink-0 rounded-2xl h-14 w-14 flex items-center justify-center",
            isCenter
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-700",
          ].join(" ")}
        >
          <item.Icon className="h-7 w-7" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>

          <button className="mt-7 inline-flex items-center gap-3 font-semibold text-gray-900">
            <span
              className={[
                "inline-flex items-center justify-center rounded-full h-11 w-11",
                isCenter
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-900",
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
