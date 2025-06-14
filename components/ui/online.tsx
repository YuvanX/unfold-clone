export const Online = () => {
  return (
    <div className="xl:mx-50 mx-10 mt-5 md:mx-30 xl:mt-20">
      <button className="flex items-center py-2.5 px-3 xl:px-5 xl:py-5 text-white bg-[#21242C] rounded-full gap-x-2 xl:gap-x-3">
        <div className="w-[21px] h-[21px] xl:w-8 xl:h-8">
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
        <div className="capitalize font-fk-grotesk fomt-medium text-[14px] xl:text-lg">online</div>
        <div className="text-green-300">&#9679;</div>
      </button>

      <div className="text-[16px] xl:text-xl font-semibold font-fk-grotesk mt-2 md:mt-5 xl:mt-10 max-w-sm">Your company is ready for big moves and we are here for it. Turn bold ideas into an impactful brand.</div>
    </div>
  );
};
