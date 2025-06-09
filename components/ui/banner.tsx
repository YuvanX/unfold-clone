"use client";

import clsx from "clsx";
import { motion } from "motion/react";

export const Banner = ({ text, className }: { text: string[], className?: string }) => {

   
  return (
    <div className={clsx("bg-[#F6FA5E] py-10 my-32 text-5xl", className)}>
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        className="flex items-center gap-x-20 font-fk-display whitespace-nowrap"
      >
        {text &&
          [...text, ...text].map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
      </motion.div>
    </div>
  );
};
