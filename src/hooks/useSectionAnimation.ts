"use client";

import { useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

type Options = {
  offsetY?: number;
  duration?: number;
  stagger?: number;
};

export function useSectionAnimation(
  eventName: string,
  options?: Options
) {
  const controls = useAnimation();

  const offsetY = options?.offsetY ?? 30;
  const duration = options?.duration ?? 0.8;
  const stagger = options?.stagger ?? 0.15;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: offsetY },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeOut" },
    },
  };

  const runAnimation = () => {
    controls.set("hidden");
    controls.start("visible");
  };

  useEffect(() => {
    // first load
    runAnimation();

    // balik dari tab
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        runAnimation();
      }
    };

    // klik navbar
    const handleNavbarTrigger = () => {
      runAnimation();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener(eventName, handleNavbarTrigger);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener(eventName, handleNavbarTrigger);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName]);

  return {
    controls,
    containerVariants,
    itemVariants,
  };
}
