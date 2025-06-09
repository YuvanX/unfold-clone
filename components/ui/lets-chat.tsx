"use client";
import { motion as m } from "motion/react";
import { useState } from "react";

export const LetsChat = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <m.div
      whileHover={{ scale: 1.04, backgroundColor: "#32f6c7" }}
      transition={{
        duration: 0.1,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      
      className="bg-[#f6fa5e] rounded-[40px] flex items-center justify-between p-20 text-black font-fk-display mx-20 cursor-pointer relative"
    >
      <m.div className="leading-50">
        <div className="capitalize text-[180px]">let's chat</div>
        <div className="text-4xl">
          Want to grab a coffee and talk about your project?
        </div>
      </m.div>

      <div>
        {isHovered ? (
          <m.img
            initial={{scale: 0}}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/640b86c26276f0736b64eb13_coffee.svg"
            alt="cup"
            className=" absolute right-1 top-0"
          />
        ) : (
          <div className="bg-white w-64 h-64 rounded-full flex items-center justify-center p-10">
            <svg
              width=" 100%"
              height=" 100%"
              viewBox="0 0 106 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.0781 81.0233C65.0781 58.9191 82.9972 41 105.101 41"
                stroke="currentColor"
                stroke-width="2"
              ></path>
              <path
                d="M65.0781 0.97666C65.0781 23.0809 82.9972 41 105.101 41"
                stroke="currentColor"
                stroke-width="2"
              ></path>
              <path
                d="M99.8203 41L0.894692 41"
                stroke="currentColor"
                stroke-width="2"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </m.div>
  );
};
