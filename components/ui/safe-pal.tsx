import Image from "next/image";

export const SafePal = () => {
  return (
    <div className="mx-20 min-h-screen">
      <div className="bg-black rounded-[40px] p-10">
        <div className="text-9xl font-fk-display text-white">Safe Pal</div>
        <div className="text-xl text-white font-semibold">
          Making your crypto experiences safe and fun
        </div>
        <div className="flex gap-x-6 items-center mt-10 h-full">
          <div className="min-w-[50%">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/66566f547d37d898e17b77c7_safepal.png"
              alt="safe pal"
              className="rounded-4xl"
            />
          </div>
          <div className="max-w-[15%] h-[605px]  object-contain">
            <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/665668fdac8cc6dd79a22bdf_solana.png"
              className="rounded-4xl w-full h-full object-cover"
              alt="solana image"
            />
          </div>
          <div className="max-w-[15%] h-[605px] object-contain">
                 <img
              src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/66566f3a57dda519020fda82_lamar.png"
              className="rounded-4xl w-full h-full object-cover"
              alt="solana image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
