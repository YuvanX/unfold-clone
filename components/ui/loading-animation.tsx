"use client";

import { motion } from "motion/react";

export const LoadingAnimation = () => {
  return (
    <div className="flex gap-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          className="w-2 h-2 rounded-full bg-[#32F6C7]"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: i * 0.15,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};
