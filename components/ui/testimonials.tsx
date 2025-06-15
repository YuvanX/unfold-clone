
import { motion } from "motion/react"
import { LoadingAnimation } from "./loading-animation";
export const Testimonials = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-black">
      <div className="flex flex-col items-center">
        <div className="gap-x-2 px-5 py-2 bg-white rounded-full flex items-center">
          <span className="text-[18px] font-fk-grotesk">
            several people are typing
          </span>
          <LoadingAnimation />
        </div>

        <div className="text-[99px] font-fk-display text-center leading-25 max-w-5xl mt-4">
          Our Clients Can’t Say Enough About Us.
        </div>

        <div className="font-fk-grotesk text-[18px] max-w-md text-center mt-5">
          Take a look for yourself. No Slack messages were harmed in the making
          of this component.
        </div>
      </div>
    </div>
  );
};


