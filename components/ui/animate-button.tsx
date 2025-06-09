'use client'
import { motion } from "motion/react";

export const CustomButton = () => {
  return (
    <div className="flex items-center gap-x-1 xl:gap-x-5 bg-white px-3 py-1 xl:px-13 xl:py-4 text-black rounded-full cursor-pointer">
      <div className="text-sm xl:text-2xl font-fk-grotesk">View</div>
      <motion.svg
        initial={{opacity: 0, x: -5}}
        animate={{opacity: 1, x: 0}}

        transition={{ duration: 0.3, ease: 'easeIn'}}
        viewBox="0 0 106 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-2 xl:w-8"
      >
        <path
          d="M65.0781 81.0233C65.0781 58.9191 82.9972 41 105.101 41"
          stroke="currentColor"
          strokeWidth="5"
        ></path>
        <path
          d="M65.0781 0.97666C65.0781 23.0809 82.9972 41 105.101 41"
          stroke="currentColor"
          strokeWidth="5"
        ></path>
        <path
          d="M99.8203 41L0.894692 41"
          stroke="currentColor"
          strokeWidth="5"
        ></path>
      </motion.svg>
    </div>
  );
};
