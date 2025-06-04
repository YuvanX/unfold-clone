export const Grid = () => {
  return (
    <div className=" flex gap-x-8 text-black">
      <div className="bg-[#32F6C7] flex flex-col rounded-[40px] p-20 justify-between max-w-lg">
        <img
          src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e0839dd3e9be14a3914ebf_you%20first.svg"
          alt="icon1"
          className="w-25"
        />
        <div>
          <div className="font-fk-display text-5xl">You First</div>
          <div className="font-fk-grotesk text-xl mt-5">
            You’re the reason we’re here, full stop. We value collaboration
            above ego and tackle the extra mile to achieve your vision with a
            can-do attitude.
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <div className="bg-white flex flex-col justify-between p-20 rounded-[40px] min-h-[50vh]">
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e083f447ab584c75ba3c35_cutting%20edge.svg"
            alt="icon2"
            className="w-20"
          />
          <div>
            <div className="text-5xl font-fk-display">Cutting Edge</div>
            <div className="text-xl font-fk-grotesk mt-5">
              Proactive about adopting the latest technologies, we deliver
              forward-thinking brand solutions that evolve to serve future
              needs.
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="bg-[#F6FA5E] flex flex-col justify-between min-h-[50vh] p-20 rounded-[40px] max-w-[50%]">
            <img
              src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e0839d8b6096bf904e78ff_hide%20nothing.svg"
              alt="icon3" className="w-20"
            />
            <div>
              <div className="text-5xl font-fk-display">Hide Nothing</div>
              <div className="text-xl font-fk-grotesk mt-5">
                “Transparency” isn’t a buzzword for us — it’s how we roll.
                You’re behind-the-scenes with our team, following our every
                move.
              </div>
            </div>
          </div>
          <div className="bg-[#60C6FF] flex flex-col justify-between p-20 min-h-[50vh] max-w-full rounded-[40px]">
            <img src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e0839dd88ab866125f49fd_fresh%20angles.svg" alt="icon4" className="w-20" />
            <div>
                <div className="text-5xl font-fk-display">Fresh Angles</div>
                <div className="text-xl font-fk-grotesk mt-5">Explore. Adapt. Stay curious. Our team lives by these values, designing to inspire and create a better, more interesting world.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
