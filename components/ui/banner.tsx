"use client";

import clsx from "clsx";
import { motion } from "motion/react";

export const Banner = ({ text, className }: { text: string[], className?: string }) => {

   
  return (
    <div className={clsx("overflow-hidden bg-[#F6FA5E]  my-5 py-5 text-[23px] md:my-10 xl:py-10 xl:my-32 xl:text-5xl", className)}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        className="flex items-center gap-x-5 xl:gap-x-20 font-fk-display whitespace-nowrap"
      >
        {text &&
          [...text, ...text].map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
      </motion.div>
    </div>
  );
};
