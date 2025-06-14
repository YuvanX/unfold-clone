export const HeroSection = () => {
  return (
    <div className="px-2 md:px-8 xl:px-20 xl:min-h-screen">
      <div className="flex justify-between items-center text-black pl-2">
        <img
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63de243e03e95f5335d7f350_logo.svg"
          alt="unfold_logo"
          className="w-28 md:w-[88px] xl:w-44"
        />
        <div className="uppercase text-[10px] md:text-[12px] mr-2  font-medium bg-[#F6FA5E]  rounded-b-full w-28 xl:w-56 cursor-pointer font-fk-display flex justify-center items-center h-8 md:h-13 xl:h-28 xl:mr-10 xl:text-lg">
          Let's chat
        </div>
      </div>
      <div className="inline-flex font-fk-display text-[58px]/12  font-medium py-8 text-black  tracking-tighter md:text-[127px]/25 
      md:py-20 xl:text-[264px]/55 xl:py-20">
        <div>
          A collective that builds&#44; designs&#44;
          <span className="inline-block align-middle w-[130px] h-[60.65px] md:w-[290.438px] md:h-[120.867px] md:ml-1 md:mt-1 xl:mt-3 xl:w-[550px] xl:h-[250px]  xl:ml-8 ml-1">
            <video
              className="w-full h-full object-cover rounded-full"
              src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4%2F6657fa4d1432e66c43c27103_tK80bh-transcode.mp4"
              autoPlay
              loop
              
            >
            </video>
          </span>
          and explores.
        </div>
      </div>
    </div>
  );
};
