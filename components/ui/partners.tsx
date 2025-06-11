"use client";

import { motion, useScroll, useTransform } from "motion/react";

export const Partner = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 900]);

  return (
    <div className="min-h-[200px] text-black bg-white rounded-xl px-4 py-2 mx-2  md:mx-8 md:rounded-2xl md:min-h-[444px]  xl:rounded-[40px] xl:mx-20 xl:min-h-screen">
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
        <div className="bg-[#21242C] w-2/3 max-h-[320px] md:min-h-[444px] xl:min-w-[600px] xl:min-h-[900px] xl:max-h-[900px] rounded-xl xl:rounded-[40px]  overflow-hidden md:my-4 md:mr-3 md:rounded-3xl">
          <div className="flex -rotate-30 gap gap-x-10">
            <motion.div
              style={{ y: y1 }}
              className="flex flex-col gap-y-2 xl:gap-y-20  shrink-0 grow-0"
            >
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d60042c41c51225010_figma.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d50042c48800224fff_gofundme.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d51bba1e19a5ebbc6d_stellar.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d57d1035dac0048dfa_treecard.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d527bda7041a3ddcc9_lob.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5281895bd74dca61f_weebly.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5732b62e5da9f2068_peacock.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d53d6a0b12360c4041_payjunction.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c33a775dad67aa11_tebra.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f5382c0bd7f7786f082abc_rumble.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e7eeb09f63fa09d3_solana.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d540c54f69767830f2_remax.svg"
                alt="image-1"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="flex flex-col gap-y-20  shrink-0 grow-0"
            >
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d50042c48800224fff_gofundme.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d60042c41c51225010_figma.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5897d62433f1edba4_facebook.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5d3c2200b4b2c1940_bowlero.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f51a8ef953732be500f8f5_lamar.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d565469f6f03fefe05_invision.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f67525b652764_genesysgo.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e60e92093153987e_adobe.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5f58db3c81d861a18_discord.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d533aa5ab058ecf596_ripple.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f670acb652765_merck.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d54f087037b8dd927e_okta.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e2ba456a616835fd_paypal.svg"
                loading="lazy"
                alt="image-1"
              />
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="flex flex-col gap-y-20  shrink-0 grow-0"
            >
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d51bba1e19a5ebbc6d_stellar.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d57d1035dac0048dfa_treecard.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d527bda7041a3ddcc9_lob.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5281895bd74dca61f_weebly.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5732b62e5da9f2068_peacock.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d53d6a0b12360c4041_payjunction.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c33a775dad67aa11_tebra.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f5382c0bd7f7786f082abc_rumble.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e7eeb09f63fa09d3_solana.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d540c54f69767830f2_remax.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e2ba456a616835fd_paypal.svg"
                loading="lazy"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d54f087037b8dd927e_okta.svg"
                alt="image-1"
              />
            </motion.div>

            <motion.div
              style={{ y: y4 }}
              className="flex flex-col gap-y-20  shrink-0 grow-0"
            >
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d57d1035dac0048dfa_treecard.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d51bba1e19a5ebbc6d_stellar.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d50042c48800224fff_gofundme.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d60042c41c51225010_figma.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5897d62433f1edba4_facebook.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5d3c2200b4b2c1940_bowlero.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f51a8ef953732be500f8f5_lamar.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d565469f6f03fefe05_invision.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f67525b652764_genesysgo.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e60e92093153987e_adobe.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5f58db3c81d861a18_discord.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d533aa5ab058ecf596_ripple.svg"
                alt="image-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f670acb652765_merck.svg"
                alt="image-1"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
