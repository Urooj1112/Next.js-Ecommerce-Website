import React from "react";
import OurProductCard from "./ExploreProductsCard";

const data = [
  {
    id: 1,
    title: "Breed Dry Dog Food",
    originalPrice: "$100",
    imageUrl: "/images/Products/dogFood.png",
    rating: 3,
    reviews: 35,
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    originalPrice: "$360",
    imageUrl: "/images/Products/canonCamera.png",
    rating: 4,
    reviews: 95,
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    originalPrice: "$700",
    imageUrl: "/images/Products/gamingLaptop.png",
    rating: 5,
    reviews: 325,
  },
  {
    id: 4,
    title: "Curology Product Set ",
    originalPrice: "$500",
    imageUrl: "/images/Products/curologyProductSet.png",
    rating: 4,
    reviews: 145,
  },
  {
    id: 5,
    title: "Kids Electric Car",
    originalPrice: "$960",
    imageUrl: "/images/Products/electricCar.png",
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    title: "Jr. Zoom Soccer Cleats",
    originalPrice: "$1160",
    imageUrl: "/images/Products/soccerCleats.png",
    rating: 5,
    reviews: 35,
  },
  {
    id: 7,
    title: "GP11 Shooter USB Gamepad",
    originalPrice: "$660",
    imageUrl: "/images/Products/USBgampad.png",
    rating: 4.5,
    reviews: 55,
  },
  {
    id: 8,
    title: "Quilted Satin Jacket",
    originalPrice: "$660",
    imageUrl: "/images/Products/satinJacket.png",
    rating: 5,
    reviews: 55,
  },
];

const ExploreOurProduct = () => {
  return (
    <div className="mx-auto relative h-[1016px] w-[1170px] mb-[140px]">
      <div className="flex justify-between mb-[60px]">
        <div className="absolute left-0 top-0 bg-[#DB4444] rounded w-5 h-10"></div>
        {/* Main Content */}
        <div className="flex flex-row items-end justify-between gap-[87px] h-[108px] ">
          <div className="flex flex-col items-start gap-[30px] ">
            <div className="text-[#DB4444] font-poppins font-semibold text-[16px] leading-[20px] ml-9">
              Our Products
            </div>
            <div className="text-[#000000] font-Inter font-semibold text-[34px] leading-[48px] tracking-wider">
              Explore Our Products
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
      <div className="w-full h-[732px] grid grid-cols-4 grid-rows-2 gap-x-[30px] gap-y-[60px]">
        {data.map((item) => (
          <OurProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className="h-[176px] flex items-center justify-center relative">
        <button className="flex items-center justify-center py-4 px-12 gap-[10px] bg-[#DB4444] rounded w-[234px] h-14 text-[16px] text-[#FAFAFA] mx-auto">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ExploreOurProduct;
