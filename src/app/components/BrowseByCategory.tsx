import React from "react";

const BrowseByCategory = () => {
  return (
    <>
      <div className="mx-auto relative h-[313px] w-[1170px] mb-[70px]">
        <div className="flex justify-between mb-[60px]">
          <div className="absolute left-0 top-0 bg-[#DB4444] rounded w-5 h-10"></div>
          {/* Main Content */}
          <div className="flex flex-row items-end justify-between gap-[87px] h-[108px] ">
            <div className="flex flex-col items-start gap-[30px] ">
              <div className="text-[#DB4444] font-poppins font-semibold text-[16px] leading-[20px] ml-9">
                Categories
              </div>
              <div className="text-[#000000] font-Inter font-semibold text-[34px] leading-[48px] tracking-wider">
                Browse By Category
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end gap-2">
            {/* Left Arrow Button */}
            <div className="relative w-[46px] h-[46px]">
              <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />
              <div className="absolute left-[23.91%] right-[23.91%] top-[23.91%] bottom-[23.91%] flex items-center justify-center">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 8L8 15M1 8H17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* Right Arrow Button */}
            <div className="relative w-[46px] h-[46px] flex-none">
              <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />
              <div className="absolute left-[23.91%] right-[23.91%] top-[23.91%] bottom-[23.91%] flex items-center justify-center transform rotate-180">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 8L8 15M1 8H17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* option */}
        <div className="flex gap-[30px]">
          <div className="w-[170px] h-[145px] border border-[#b2b2b2] flex flex-col gap-4 items-center justify-center rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_30802_868)">
                <path
                  d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.6667 7H31.1354"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 44.0052V44.0305"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="15.1667"
                  y1="39.8334"
                  x2="40.8333"
                  y2="39.8334"
                  stroke="black"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_30802_868">
                  <rect width="56" height="56" fill="black" />
                </clipPath>
              </defs>
            </svg>
            Phones
          </div>
          <div className="w-[170px] h-[145px] border border-[#b2b2b2] flex flex-col gap-4 items-center justify-center rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_30802_613)">
                <path
                  d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.3333 46.6666H39.6667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 37.3334V46.6667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 37.3334V46.6667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 32H48"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_30802_613">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Computers
          </div>
          <div className="w-[170px] h-[145px] border border-[#b2b2b2] flex flex-col gap-4 items-center justify-center rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_30802_629)">
                <path
                  d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 42V49H35V42"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 14V7H35V14"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="24"
                  y1="23"
                  x2="24"
                  y2="34"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="28"
                  y1="28"
                  x2="28"
                  y2="34"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="32"
                  y1="26"
                  x2="32"
                  y2="34"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_30802_629">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Smart Watch
          </div>
          <div className="w-[170px] h-[145px] border-2 border-[#DB4444] flex flex-col gap-4 items-center justify-center bg-[#DB4444] text-white rounded">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_30802_6)">
                <path
                  d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_30802_6">
                  <rect width="56" height="56" fill="black" />
                </clipPath>
              </defs>
            </svg>
            Camera
          </div>
          <div className="w-[170px] h-[145px] border border-[#b2b2b2] flex flex-col gap-4 items-center justify-center rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_30802_644)">
                <path
                  d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_30802_644">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            HeadPhones
          </div>
          <div className="w-[170px] h-[145px] border border-[#b2b2b2] flex flex-col gap-4 items-center justify-center rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_30802_809)">
                <path
                  d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 28H23.3333M18.6667 23.3334V32.6667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 25.6666V25.6908"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 30.3333V30.3574"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_30802_809">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Gaming
          </div>
        </div>
      </div>
      <div className=" w-[1170px] h-0 opacity-30 border-b-[0.5px] border-solid border-black transform rotate-180 mb-[70px] mx-auto" />
    </>
  );
};

export default BrowseByCategory;
