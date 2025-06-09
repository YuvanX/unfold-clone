export const HeroSection = () => {
  return (
    <div className="min-h-screen px-20">
      <div className="flex justify-between items-center text-black  pl-2">
        <img
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63de243e03e95f5335d7f350_logo.svg"
          alt="unfold_logo"
          className="w-44"
        />
        <div className="uppercase text-lg  font-medium bg-[#F6FA5E]   rounded-b-full w-56 cursor-pointer font-fk-display flex justify-center items-center h-28 mr-10">
          Let's chat
        </div>
      </div>
      <div className="inline-flex font-fk-display text-[264px]/55 font-medium  text-black  tracking-tighter py-20">
        <div>
          A collective that builds&#44; designs&#44;
          <span className="inline-block align-middle w-[550px] h-[250px] pt-1.5 ml-8 my-2">
            <video
              className="w-full h-full object-cover rounded-full"
              src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4%2F6657fa4d1432e66c43c27103_tK80bh-transcode.mp4"
              loop
              autoPlay
              controls
            >
            </video>
          </span>
          and explores.
        </div>
      </div>
    </div>
  );
};
