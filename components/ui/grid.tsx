export const Grid = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap xl:gap-x-8 text-black md:mx-8 xl:mx-20 mx-4">
      <div className="bg-[#32F6C7] flex flex-col rounded-xl xl:rounded-[40px] p-3 md:p-10 xl:p-20 justify-between my-4 xl:my-0">
        <img
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e0839dd3e9be14a3914ebf_you%20first.svg"
          alt="icon1"
          className="w-[22.95px] md:w-[50px] xl:w-25"
        />
        <div>
          <div className="font-fk-display mt-3 text-[22px] xl:text-5xl">You First</div>
          <div className="font-fk-grotesk text-[17px]/5 xl:text-xl mt-1.5 xl:mt-5">
            You’re the reason we’re here, full stop. We value collaboration
            above ego and tackle the extra mile to achieve your vision with a
            can-do attitude.
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <div className="bg-white flex flex-col justify-between p-3 md:p-10 xl:p-20 rounded-xl xl:rounded-[40px] xl:min-h-[50vh]">
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e083f447ab584c75ba3c35_cutting%20edge.svg"
            alt="icon2"
            className="w-[22.95px] md:w-[50px] xl:w-25"
          />
          <div>
            <div className="xl:text-5xl mt-3 text-[22px] font-fk-display">Cutting Edge</div>
            <div className="xl:text-xl font-fk-grotesk text-[17px]/5 mt-1.5 xl:mt-5">
              Proactive about adopting the latest technologies, we deliver
              forward-thinking brand solutions that evolve to serve future
              needs.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap xl:gap-x-8">
          <div className="bg-[#F6FA5E] flex flex-col justify-between xl:min-h-[50vh] p-4 md:p-10 rounded-xl xl:rounded-[40px] xl:max-w-[50%] mb-4  xl:mb-0">
            <img
              src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e0839d8b6096bf904e78ff_hide%20nothing.svg"
              alt="icon3" className="w-[22.95px] md:w-[50px] xl:w-25"
            />
            <div>
              <div className="xl:text-5xl mt-3 text-[22px] font-fk-display">Hide Nothing</div>
              <div className="xl:text-xl font-fk-grotesk text-[17px]/5 mt-1.5 xl:mt-5">
                “Transparency” isn’t a buzzword for us — it’s how we roll.
                You’re behind-the-scenes with our team, following our every
                move.
              </div>
            </div>
          </div>
          <div className="bg-[#60C6FF] flex flex-col justify-between xl:p-20 md:p-10 p-4 xl:min-h-[50vh] max-w-full rounded-xl xl:rounded-[40px]">
            <img src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e0839dd88ab866125f49fd_fresh%20angles.svg" alt="icon4" className="w-[22.95px] md:w-[50px] xl:w-25" />
            <div>
                <div className="xl:text-5xl mt-3 text-[22px] font-fk-display">Fresh Angles</div>
                <div className="xl:text-xl font-fk-grotesk text-[17px]/5 mt-1.5 xl:mt-5">Explore. Adapt. Stay curious. Our team lives by these values, designing to inspire and create a better, more interesting world.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
