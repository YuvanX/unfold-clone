"use client";

import { motion } from "motion/react";

export const Banner = ({ text }: { text: string[] }) => {
  return (
    <div className="bg-[#F6FA5E] py-10 my-32">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        className="flex items-center gap-x-30 lowercase text-black text-5xl font-fk-display whitespace-nowrap"
      >
        {text && text.map((t) => <span>{t}</span>)}
      </motion.div>
    </div>
  );
};
