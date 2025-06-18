import { CustomButton } from "./animate-button";

export const SafePal = () => {
  return (
    <div className="px-4 my-10 md:my-5 md:px-8 xl:min-h-screen xl:px-20">
      <div className=" bg-black rounded-xl  p-2 md:p-4 md:rounded-4xl xl:p-10 xl:rounded-[40px]">
        <div className="text-4xl font-fk-display text-white md:text-[68px] xl:text-9xl">
          Safe Pal
        </div>
        <div className="max-w-[200px] text-[16px] text-white font-semibold font-fk-grotesk md:max-w-full xl:text-xl">
          Making your crypto experiences safe and fun.
        </div>
        <div className="flex gap-x-2 h-full items-center mt-2 md:gap-x-4 xl:mt-10 xl:gap-x-6 ">
          <div className="min-w-[70%] xl:min-w-[50%] relative">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/66566f547d37d898e17b77c7_safepal.png"
              alt="safe pal"
              className="rounded-lg w-full md:rounded-4xl "
            />
            <div className="absolute bottom-2 right-2 md:right-4 md:bottom-3 xl:bottom-5 xl:right-5">
              <CustomButton />
            </div>
          </div>
          <div className=" h-[150px] md:h-[300px]  xl:h-[605px] md:max-w-[15%]">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/665668fdac8cc6dd79a22bdf_solana.png"
              className="rounded-lg w-full  h-full md:rounded-3xl xl:rounded-4xl  object-cover"
              alt="solana image"
            />
          </div>
          <div className=" h-[150px] md:h-[300px] xl:h-[605px] md:max-w-[15%] ">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/66566f3a57dda519020fda82_lamar.png"
              className="rounded-lg w-full  h-full md:rounded-3xl xl:rounded-4xl object-cover"
              alt="solana image"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};
