'use client'

import { useRef } from "react";
import { LoadingAnimation } from "./loading-animation";
import { useScroll, motion, useTransform } from "motion/react";

export const Testimonials = () => {
  const ref = useRef(null)
  const { scrollYProgress }  = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [200, -200])
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200])
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200])
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40])


  return (
    <div  className="min-h-screen flex justify-center items-center text-black ">

      <div ref={ref} className="flex flex-col items-center relative">
        <motion.div style={{ x: x1, y: y1, rotate }} className="absolute text-black left-0">
        Hi rehre
      </motion.div>
        <div className="gap-x-2 px-5 py-2 bg-white rounded-full flex items-center">
          <span className="text-[18px] font-fk-grotesk">
            several people are typing
          </span>
          <LoadingAnimation />
        </div>

        <div className="text-[99px] font-fk-display text-center leading-25 max-w-5xl mt-4">
          Our Clients Can’t Say Enough About Us.
        </div>
        

        <div className="font-fk-grotesk text-[18px] max-w-md text-center mt-5">
          Take a look for yourself. No Slack messages were harmed in the making
          of this component.
        </div>
      </div>
    </div>
  );
};


const Card = () => {
  
}
