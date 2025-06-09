import { CustomButton } from "./animate-button";

export const SafePal = () => {
  return (
    <div className="xl:min-h-screen px-4 xl:px-20">
      <div className="relative bg-black rounded-xl  p-2 xl:p-10 xl:rounded-[40px]">
        <div className="text-4xl font-fk-display text-white xl:text-9xl">
          Safe Pal
        </div>
        <div className="max-w-[200px] md:max-w-full text-[16px] xl:text-xl text-white font-semibold font-fk-grotesk">
          Making your crypto experiences safe and fun.
        </div>
        <div className="flex gap-x-2 xl:gap-x-6 items-center mt-2 xl:mt-10 h-full">
          <div className="min-w-[70%] xl:min-w-[50%]">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/66566f547d37d898e17b77c7_safepal.png"
              alt="safe pal"
              className="rounded-lg xl:rounded-4xl w-full"
            />
          </div>
          <div className="xl:max-w-[15%] h-[150px] xl:h-[605px]">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/665668fdac8cc6dd79a22bdf_solana.png"
              className="rounded-lg xl:rounded-4xl w-full h-full object-cover"
              alt="solana image"
            />
          </div>
          <div className="xl:max-w-[15%] h-[150px] xl:h-[605px]">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/66566f3a57dda519020fda82_lamar.png"
              className="rounded-lg xl:rounded-4xl w-full h-full object-cover"
              alt="solana image"
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-40 xl:bottom-20 xl:left-1/2">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};
