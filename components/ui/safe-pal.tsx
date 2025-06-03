import Image from "next/image";

export const SafePal = () => {
  return (
    <div className="mx-20 min-h-screen">
      <div className="bg-black rounded-4xl p-10">
        <div className="text-9xl font-fk-display text-white">Safe Pal</div>
        <div className="text-xl text-white font-semibold">
          Making your crypto experiences safe and fun
        </div>
        <img src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/66566f547d37d898e17b77c7_safepal.png" alt="Image" className="rounded-4xl mt-10"/>
        {/* <img src="https://cdn.prod.website-files.com/63dffdbf1693d14a2308d481/665668fdac8cc6dd79a22bdf_solana.png" alt="" /> */}
      </div>
      <div>
      </div>
    </div>
  );
};
