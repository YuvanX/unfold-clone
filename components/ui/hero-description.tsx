export const HeroDescription = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between text-black xl:h-40 mb-22 xl:mb-32 px-4 md:px-8 xl:mt-20 xl:px-20">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-y-2 items-center md:flex-row md:gap-x-4">
          <div className="w-6 h-6 xl:w-8 xl:h-8">
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
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M21.7558 8.95C20.8658 4.14 16.6558 0.5 11.5958 0.5C6.53579 0.5 2.31579 4.14 1.43579 8.95"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M2.88574 5.26001H20.2957"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M11.5959 0.5V9.23"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M6.22583 9.22999C6.22583 4.60999 8.62583 0.859985 11.5958 0.859985C14.5658 0.859985 16.9558 4.60999 16.9558 9.22999"
                  stroke="currentColor"
                  strokeMiterlimit="10"
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
          <div className="font-fk-display text-xl tracking-tighter xl:tracking-normal">
            <span className="text-xs xl:text-xl">HQ:</span> 10:37 PM{" "}
            <span className="text-sm xl:text-xl">EST</span>
          </div>
          <div className="text-xs xl:text-sm font-fk-grotesk">
            Servicing Earth
          </div>
        </div>
        <div className="max-w-md md:max-w-[340px] font-fk-grotesk mt-3 md:mt-0 font-medium text-[17px]/5 xl:text-xl">
          Turn bold ideas into impactful brand experiences with the handiwork
          and help of our collective bunch.
        </div>
      </div>
      <div>
        <div className="text-xl font-semibold  font-fk-display md:text-[22px] md:max-w-[300px] xl:max-w-[590px] text-center md:text-left mt-3 xl:mt-0 xl:text-5xl/15 xl:font-medium">
          Your company is ready for big moves and we are here for it.
        </div>
      </div>
    </div>
  );
};
