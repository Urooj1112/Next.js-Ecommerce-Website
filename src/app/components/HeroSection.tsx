import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-[500px] w-[1170px] mx-auto relative'>
      {/* Left Side */}
      <div className="absolute left-0 top-[28px] w-[217px] h-[344px] flex flex-col items-start gap-4">
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Woman’s Fashion</span>
          <div className="w-[24px] h-[24px]">
            {/* SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Men’s Fashion</span>
          <div className="w-[24px] h-[24px] ">
            {/* SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Electronics</span>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Home & Lifestyle</span>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Medicine</span>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Sports & Outdoor</span>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Baby’s & Toys</span>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Groceries & Pets</span>
        </div>
        <div className="flex items-center gap-4 w-[217px] h-[24px]">
          <span className="text-black text-center text-base font-normal">Health & Beauty</span>
        </div>
      </div>
      <div className="absolute w-[384px] h-0 left-[40px] top-[191px] opacity-30 border-b-[0.5] border-black border-b-[0.5px] rotate-90"></div>
      {/* Right Side */}
      <div className="absolute w-[892px] h-[344px] left-[289px] top-[28px] bg-black overflow-hidden">
        {/* Apple Image */}
        <Image
          src="/images/IphoneImage.png"
          alt="Apple Logo"
          width={496}
          height={352}
          className="relative w-[496px] h-[352px] left-[396px] top-[16px] bg-cover bg-center"
          priority
        />

        {/* IPhone */}
        <div className="absolute w-[190px] h-[49px] left-[64px] top-[58px] flex items-center gap-6">
          <div className="w-[40px] h-[49px] bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/images/appleLogo.png)' }}></div>
          <div className="flex-none text-center text-white font-poppins text-sm">iPhone 14 Series</div>
        </div>

        {/* Voucher Text */}
        <div className="absolute w-[294px] h-[120px] left-[64px] top-[127px] text-white text-[48px] font-Inter font-semibold leading-[60px] tracking-wide">
          Up to 10% off Voucher
        </div>

        
        <div className="absolute flex items-center gap-2 left-[67px] top-[269px]">
          <button className="w-[81px] h-[24px] text-center text-white text-[16px] font-medium underline underline-offset-8">Shop Now</button>
          <svg width="20" height="20" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        
        <div className="absolute flex items-center gap-3 left-[353px] top-[319px]">
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
          <div className="w-[14px] h-[14px]  rounded-full"></div>
          <div className="absolute w-[10px] h-[10px] left-[50px] top-[2px] bg-[#DB4444]"></div>
          <div className="absolute w-[14px] h-[14px] left-[48px] top-[0px] border-2 border-white  rounded-full"></div>
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
          <div className="w-[12px] h-[12px] bg-white opacity-50  rounded-full"></div>
        </div>
      </div>
    </div>

  )
}

export default HeroSection
