import { Wavy } from "./wavy";

export const HeroDescription = () => {
  return (
    <div className="flex justify-between text-black h-40 mt-20 mb-32">
      <div className="flex flex-col justify-between">
        <div className="flex gap-x-4 items-center">
          <div className="w-8 h-8">
            <svg
              width=" 100%"
              height=" 100%"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3426_100906)">
                <path
                  d="M21.9259 11.24C21.9259 16.95 17.2959 21.58 11.5859 21.58C5.87586 21.58 1.25586 16.95 1.25586 11.24H21.9259Z"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M21.7558 8.95C20.8658 4.14 16.6558 0.5 11.5958 0.5C6.53579 0.5 2.31579 4.14 1.43579 8.95"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></path>
                <path
                  d="M2.88574 5.26001H20.2957"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M11.5959 0.5V9.23"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M6.22583 9.22999C6.22583 4.60999 8.62583 0.859985 11.5958 0.859985C14.5658 0.859985 16.9558 4.60999 16.9558 9.22999"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3426_100906">
                  <rect
                    width="21.67"
                    height="22.07"
                    fill="currentColor"
                    transform="translate(0.755859)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="font-fk-display text-xl">HQ: 10:37 PM EST</div>
          <div className="text-sm font-fk-grotesk">Servicing Earth</div>
        </div>
        <div className="max-w-md font-fk-grotesk font-medium text-xl">
          Turn bold ideas into impactful brand experiences with the handiwork
          and help of our collective bunch.
        </div>
      </div>
      <div>
        <div className="text-5xl/16 font-medium font-fk-display max-w-2xl text-left relative">
          Your company is ready for big moves and we are here for it.
          {/* <div className="absolute top-18 text-[#9071FB]">
            <Wavy />
          </div> */}
        </div>
      </div>
    </div>
  );
};
