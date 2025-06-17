"use client";

import { firstColImageData, fourthColImageData, secondColImageData, thirdColImageData } from "@/libs/utils/image-data";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Partner = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={containerRef} className="min-h-[200px] text-black bg-white rounded-xl px-4 py-2 mx-2  md:mx-8 md:rounded-2xl md:min-h-[444px]  xl:rounded-[40px] xl:mx-20 xl:min-h-screen">
      <div className="flex items-center justify-between md:pl-10 xl:pl-20 xl:pr-10 xl:py-12">
        <div className="flex flex-col md:h-[400px]  xl:h-[800px] justify-between">
          <div className="capitalize text-[32px]/7 md:text-[68px]/15 md:pt-5 xl:text-9xl font-fk-display font-medium">
            friends & partners
          </div>
          <div className="flex flex-col gap-y-8 mt-5 md:flex-row md:gap-x-10 xl:gap-x-20 ">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac26af00b1fba5f9e5e_startup%20star.svg"
                alt="startup"
                className="w-8 md:w-[59px] xl:w-20"
              />
              <div className="capitalize text-sm xl:text-lg mt-1 xl:mt-5 font-fk-display">
                startup
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac247ab58939bb5d371_established%20star.svg"
                alt="established"
                className="w-8 md:w-[59px] xl:w-20"
              />
              <div className="capitalize text-sm xl:text-lg mt-1 xl:mt-5 font-fk-display">
                established
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac21693d180a60f6426_enterprise%20star.svg"
                alt="enterprise"
                className="w-8 md:w-[59px] xl:w-20"
              />
              <div className="capitalize text-sm xl:text-lg mt-1 xl:mt-5 font-fk-display">
                enterprise
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#21242C] w-2/3 max-h-[320px] md:min-h-[444px] xl:min-w-[600px] xl:min-h-[900px] xl:max-h-[900px] rounded-xl xl:rounded-[40px] overflow-hidden md:my-4 md:mr-3 md:rounded-3xl">
          <div className="flex -rotate-30 gap gap-x-5">
            <motion.div
              style={{ y: y1 }}
              className="flex flex-col gap-y-2 xl:gap-y-20  shrink-0 grow-0"
            >
              {firstColImageData.map((m) => <ImageBuilder src={m.src} key={m.src} alt={m.alt} />)}
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="flex flex-col gap-y-20  shrink-0 grow-0"
            >
              {secondColImageData.map((m) => <ImageBuilder src={m.src} key={m.src} alt={m.alt} />)}
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="flex flex-col gap-y-20  shrink-0 grow-0"
            >
              {thirdColImageData.map((m) => <ImageBuilder src={m.src} key={m.src} alt={m.alt} />)}
            </motion.div>

            <motion.div
              style={{ y: y4 }}
              className="flex flex-col gap-y-20  shrink-0 grow-0"
            >
              {fourthColImageData.map((m) => <ImageBuilder key={m.src} src={m.src} alt={m.alt} />)}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ImageBuilder = ({ src, alt }: { src: string, alt: string }) => {
  return <img src={src} alt={alt} />
}
