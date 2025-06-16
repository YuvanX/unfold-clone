"use client";

import { useRef } from "react";
import { LoadingAnimation } from "./loading-animation";
import { useScroll, motion, useTransform } from "motion/react";
import { FiActivity } from "react-icons/fi";
import { IconType } from "react-icons";
import Image from "next/image";

export const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const r1 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const r2 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const r3 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const r4 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const r5 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const r6 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const r7 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const r8 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const r9 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const r10 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <div
      ref={ref}
      className="min-h-screen flex justify-center items-center text-black relative my-20"
    >
      <motion.div
        style={{ x: x1, y: y1, rotate: r1 }}
        className="absolute text-black left-0 top-0"
      >
        <Card
          testimonial={`"In the top 1% of companies I've ever worked with when it comes to people caring about project"`}
          reviewer="Yuvan from nuvessi"
          icon={FiActivity}
        />
      </motion.div>

      <motion.div
        style={{ x: x2, y: y2, rotate: r2 }}
        className="absolute text-black left-0 top-40"
      >
        <Image
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e523b634d60a18bd161b8f_clutch.svg"
          alt="image-cloud"
          width={300}
          height={300}
        />
      </motion.div>

      <motion.div
        style={{ x: x1, y: y2, rotate: r3 }}
        className="absolute left-0"
      >
        <Card
          testimonial={`"Unfold's done in a month and a half what we've been trying do in the last year and a half!"`}
          reviewer="Isha from nuvessi"
          icon={FiActivity}
        />
      </motion.div>

      <motion.div
        style={{ x: x2, y: y1, rotate: r4 }}
        className="absolute left-0 bottom-0"
      >
        <Image
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e525277e6bfc538276cd57_chat.svg"
          alt="image-chat"
          width={300}
          height={300}
        />
      </motion.div>

      <motion.div
        style={{ x: x2, y: y1, rotate: r5 }}
        className="absolute right-10 top-0"
      >
        <Card
          testimonial={`"When the Data Scientists are saying the UX/UI looks good... that's a BIG deal(rarely happens). 👏"`}
          reviewer="Abhi from nuvessi"
          icon={FiActivity}
        />
      </motion.div>

      <motion.div
        style={{ x: x1, y: y2, rotate: r6 }}
        className="absolute right-0"
      >
        <Image
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e524b35f5d677e9845c642_pencil.svg"
          width={300}
          height={300}
          alt="image-pencil"
        />
      </motion.div>

      <motion.div
        style={{ x: x1, y: y2, rotate: r7 }}
        className="absolute right-0"
      >
        <Card
          testimonial={`"Huge thanks to the unfold team. Really proud of this one"`}
          reviewer="Abhi from nuvessi"
          icon={FiActivity}
        />
      </motion.div>

      <motion.div style={{ x: x2, y: y1, rotate: r8 }} className="absolute bottom-50 right-0">
        <Image
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e526efa973a610da0df9e8_farley.gif"
          width={100}
          height={100}
          alt="image-pfp"
        />
      </motion.div>

      <motion.div
        style={{ x: x1, y: y2, rotate: r9 }}
        className="absolute right-0 bottom-0"
      >
        <Card
          testimonial={`"Your designers bring so many mind-opemning ideas yet tangible designs to the project. I'm very impressed"`}
          reviewer="Alex from nuvessi"
          icon={FiActivity}
        />
      </motion.div>

      
      <div className="flex flex-col items-center ">
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

const Card = ({
  testimonial,
  icon,
  reviewer,
}: {
  testimonial: string;
  icon: IconType;
  reviewer: string;
}) => {
  const Icon = icon;
  return (
    <div className="flex flex-col gap-y-2 rounded-4xl bg-white text-black font-fk-grotesk px-10 py-8 max-w-xl">
      <div className="font-fk-grotesk text-xl font-semibold">{testimonial}</div>
      <div className="flex items-center gap-x-2">
        <Icon />
        <div>{reviewer}</div>
      </div>
    </div>
  );
};
