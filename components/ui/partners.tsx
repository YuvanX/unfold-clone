"use client";

import { motion, useScroll, useTransform } from "motion/react";

export const Partner = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -900])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 900])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -900])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 900])

  return (
    <div className="min-h-screen text-black bg-white rounded-[40px] mx-20">
      <div className="flex items-center justify-between px-20 py-10">
        <div className="flex flex-col h-[800px]  justify-between">
          <div className="capitalize text-9xl font-fk-display font-medium">
            friends & partners
          </div>
          <div className="flex gap-x-20">
            <div>
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac26af00b1fba5f9e5e_startup%20star.svg"
                alt="startup"
              />
              <div className="capitalize text-lg text-center mt-5 font-fk-display">
                startup
              </div>
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac247ab58939bb5d371_established%20star.svg"
                alt="established"
              />
              <div className="capitalize text-lg text-center mt-5 font-fk-display">
                established
              </div>
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e04ac21693d180a60f6426_enterprise%20star.svg"
                alt="enterprise"
              />
              <div className="capitalize text-lg text-center mt-5 font-fk-display">
                enterprise
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#21242C] min-w-[600px] min-h-[900px] max-h-[900px] rounded-[40px]  overflow-hidden">
          <div className="flex -rotate-30 gap gap-x-10">
            <motion.div style={{ y : y1 }} className="flex flex-col gap-y-20 shrink-0 grow-0">
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d60042c41c51225010_figma.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d50042c48800224fff_gofundme.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d51bba1e19a5ebbc6d_stellar.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d57d1035dac0048dfa_treecard.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d527bda7041a3ddcc9_lob.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5281895bd74dca61f_weebly.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5732b62e5da9f2068_peacock.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d53d6a0b12360c4041_payjunction.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c33a775dad67aa11_tebra.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f5382c0bd7f7786f082abc_rumble.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e7eeb09f63fa09d3_solana.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d540c54f69767830f2_remax.svg"
                alt=""
              />
            </motion.div>

            <motion.div style={{ y: y2 }} className="flex flex-col gap-y-20 shrink-0 grow-0">
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d50042c48800224fff_gofundme.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d60042c41c51225010_figma.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5897d62433f1edba4_facebook.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5d3c2200b4b2c1940_bowlero.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f51a8ef953732be500f8f5_lamar.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d565469f6f03fefe05_invision.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f67525b652764_genesysgo.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e60e92093153987e_adobe.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5f58db3c81d861a18_discord.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d533aa5ab058ecf596_ripple.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f670acb652765_merck.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d54f087037b8dd927e_okta.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e2ba456a616835fd_paypal.svg"
                loading="lazy"
                alt=""
              />
            </motion.div>

            <motion.div style={{ y: y3 }} className="flex flex-col gap-y-20 shrink-0 grow-0">
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d51bba1e19a5ebbc6d_stellar.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d57d1035dac0048dfa_treecard.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d527bda7041a3ddcc9_lob.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5281895bd74dca61f_weebly.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5732b62e5da9f2068_peacock.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d53d6a0b12360c4041_payjunction.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c33a775dad67aa11_tebra.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f5382c0bd7f7786f082abc_rumble.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e7eeb09f63fa09d3_solana.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d540c54f69767830f2_remax.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e2ba456a616835fd_paypal.svg"
                loading="lazy"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d54f087037b8dd927e_okta.svg"
                alt=""
              />
            </motion.div>

            <motion.div style={{ y: y4 }} className="flex flex-col gap-y-20 shrink-0 grow-0">
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d57d1035dac0048dfa_treecard.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d51bba1e19a5ebbc6d_stellar.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d50042c48800224fff_gofundme.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d60042c41c51225010_figma.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5897d62433f1edba4_facebook.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5d3c2200b4b2c1940_bowlero.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f51a8ef953732be500f8f5_lamar.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d565469f6f03fefe05_invision.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f67525b652764_genesysgo.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5e60e92093153987e_adobe.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5f58db3c81d861a18_discord.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d533aa5ab058ecf596_ripple.svg"
                alt=""
              />
              <img
                src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63f4e4d5c89f670acb652765_merck.svg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
