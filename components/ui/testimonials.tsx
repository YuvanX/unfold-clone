"use client";

import { useRef } from "react";
import { LoadingAnimation } from "./loading-animation";
import { useScroll, motion, useTransform } from "motion/react";
import Image from "next/image";

export const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -100]);

  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const x3 = useTransform(scrollYProgress, [0, 1], [300, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 200]);

  const y4 = useTransform(scrollYProgress, [0, 1], [50, 200]);

  const x5 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [250, -50]);

  const x6 = useTransform(scrollYProgress, [0, 1], [-400, 200]);

  const x7 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y7 = useTransform(scrollYProgress, [0, 1], [200, 200]);

  const x8 = useTransform(scrollYProgress, [0, 1], [-100, 10]);
  const y8 = useTransform(scrollYProgress, [0, 1], [100, 200]);

  const x9 = useTransform(scrollYProgress, [0, 1], [100, 200]);
  const y9 = useTransform(scrollYProgress, [0, 1], [-200, 100]);

  const r1 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const r2 = useTransform(scrollYProgress, [0, 1], [-60, 10]);
  const r3 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const r4 = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const r5 = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const r6 = useTransform(scrollYProgress, [0, 1], [20, -30]);
  const r7 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const r8 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const r9 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div
      ref={ref}
      className="xl:min-h-screen flex justify-center items-center text-black relative mt-20 mb-10 md:my-30 xl:mt-40 xl:mb-80"
    >
      <div className="hidden xl:block">
        <motion.div
          style={{ x: x1, y: y1, rotate: r1 }}
          className="absolute text-black top-0 left-0"
        >
          <Card
            testimonial={`"In the top 1% of companies I've ever worked with when it comes to people caring about project"`}
            reviewer="Yuvan from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a014030cda3f1845a8562_image_2024-05-31_12-34-52.png"
          />
        </motion.div>

        <motion.div
          style={{ x: x2, y: y2, rotate: r2 }}
          className="absolute text-black  top-70 left-10"
        >
          <Image
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e523b634d60a18bd161b8f_clutch.svg"
            alt="image-cloud"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div
          style={{ x: x3, y: y3, rotate: r3 }}
          className="absolute left-0 bottom-50"
        >
          <Card
            testimonial={`"Unfold's done in a month and a half what we've been trying do in the last year and a half!"`}
            reviewer="Isha from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png"
          />
        </motion.div>

        <motion.div
          style={{ y: y4, rotate: r4 }}
          className="absolute left-20 bottom-0"
        >
          <Image
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e525277e6bfc538276cd57_chat.svg"
            alt="image-chat"
            width={220}
            height={220}
          />
        </motion.div>

        <motion.div
          style={{ x: x5, y: y5, rotate: r5 }}
          className="absolute right-10 top-0"
        >
          <Card
            testimonial={`"When the Data Scientists are saying the UX/UI looks good... that's a BIG deal(rarely happens). 👏"`}
            reviewer="Honey from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01690c508b5bebac1311_image_2024-05-31_12-38-04-p-500.png"
          />
        </motion.div>

        <motion.div
          style={{ x: x6, rotate: r6 }}
          className="absolute right-20 top-80"
        >
          <Image
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e524b35f5d677e9845c642_pencil.svg"
            width={200}
            height={200}
            alt="image-pencil"
          />
        </motion.div>

        <motion.div
          style={{ x: x7, y: y7, rotate: r7 }}
          className="absolute right-0"
        >
          <Card
            testimonial={`"Huge thanks to the unfold team. Really proud of this one"`}
            reviewer="Abhi from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
        </motion.div>

        <motion.div
          style={{ x: x8, y: y8, rotate: r8 }}
          className="absolute right-50 bottom-30"
        >
          <Image
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e526efa973a610da0df9e8_farley.gif"
            width={120}
            height={120}
            alt="image-pfp"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          style={{ x: x9, y: y9, rotate: r9 }}
          className="absolute right-1/2 translate-1/2 bottom-0"
        >
          <Card
            testimonial={`"Your designers bring so many mind-opemning ideas yet tangible designs to the project. I'm very impressed"`}
            reviewer="Alex from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center ">
        <div className="gap-x-2 px-5 py-2 bg-white rounded-full flex items-center">
          <span className="text-[14px] xl:text-[16px] font-fk-grotesk">
            several people are typing
          </span>
          <LoadingAnimation />
        </div>

        <div className="text-[25px]/6 mx-10 md:text-6xl xl:mx-0 xl:text-[99px] font-fk-display text-center xl:leading-25 max-w-5xl mt-4">
          Our Clients Can’t Say Enough About Us.
        </div>

        <div className="font-fk-grotesk mx-10 xl:mx-0 text-[16px]/5 xl:text-[18px] max-w-md text-center mt-5">
          Take a look for yourself. No Slack messages were harmed in the making
          of this component.
        </div>

        <div className="flex flex-col xl:hidden mt-8">
          <Card
            testimonial={`"Your designers bring so many mind-opemning ideas yet tangible designs to the project. I'm very impressed"`}
            reviewer="Alex from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png"
          />
          <Card
            testimonial={`"Huge thanks to the unfold team. Really proud of this one"`}
            reviewer="Abhi from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
          <Card
            testimonial={`"Unfold's done in a month and a half what we've been trying do in the last year and a half!"`}
            reviewer="Isha from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png"
          />
          <Card
            testimonial={`"Huge thanks to the unfold team. Really proud of this one"`}
            reviewer="Abhi from nuvessi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
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
  icon: string;
  reviewer: string;
}) => {
  return (
    <div className="flex flex-col gap-y-5 xl:gap-y-2 mx-5 my-2 md:mx-10 md:my-3 rounded-lg xl:rounded-4xl bg-white text-black font-fk-grotesk px-4 py-3 xl:px-10 xl:py-8 xl:max-w-xl md:max-w-full md:p-8">
      <div className="font-fk-grotesk text-[16px] xl:text-xl xl:font-semibold">
        {testimonial}
      </div>
      <div className="flex flex-col  xl:flex-row xl:items-center gap-x-2">
        <Image
          src={icon}
          alt="image"
          width={20}
          height={20}
          className="rounded-full"
        />
        <div className="text-sm">{reviewer}</div>
      </div>
    </div>
  );
};
