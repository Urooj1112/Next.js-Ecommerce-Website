import React from 'react'
import BestSellingProducts from './BestSellingProductCard'


const data = [
    {
        id: 1,
        title: 'The north coat',
        originalPrice: '$360',
        discountedPrice: '$260',
        discountPercent: '-35%',
        imageUrl: '/images/Products/pinkHoddie.png',
        rating: 5,
        reviews: 70,
    },
    {
        id: 2,
        title: 'Gucci duffle bag',
        originalPrice: '$1160',
        discountedPrice: '$860',
        discountPercent: '-35%',
        imageUrl: '/images/Products/gucciBag.png',
        rating: 4,
        reviews: 90,
    },
    {
        id: 3,
        title: 'RGB liquid CPU Cooler',
        originalPrice: '$170',
        discountedPrice: '$160',
        discountPercent: '-35%',
        imageUrl: '/images/Products/CPUcooler.png',
        rating: 4.5,
        reviews: 20,
    },
    {
        id: 4,
        title: 'Small BookSelf',
        originalPrice: '$360',
        discountedPrice: '$360',
        discountPercent: '-35%',
        imageUrl: '/images/Products/bookShelf.png',
        rating: 5,
        reviews: 65,
    },
]

const ThisMonth = () => {
    return (
        <div>
            <div className='mx-auto relative h-[518px] w-[1170px] mb-[140px]'>
                <div className='flex justify-between mb-[60px]'>
                    <div className='absolute left-0 top-0 bg-[#DB4444] rounded w-5 h-10'></div>
                    {/* Main Content */}
                    <div className='flex flex-row items-end justify-between gap-[87px] h-[108px] '>
                        <div className='flex flex-col items-start gap-[30px] '>
                            <div className='text-[#DB4444] font-poppins font-semibold text-[16px] leading-[20px] ml-9'>
                                This Month
                            </div>
                            <div className='text-[#000000] font-Inter font-semibold text-[34px] leading-[48px] tracking-wider'>
                                Best Selling Products
                            </div>
                        </div>
                    </div>

                    <div className='flex items-end justify-end'>
                        <button className='w-[159px] h-[56px] flex items-center justify-center bg-[#DB4444] text-white rounded'>View All</button>
                    </div>
                </div>
                <div className='flex gap-[30px] overflow-x-auto'>
                    {data.map((item) => (
                        <BestSellingProducts key={item.id} product={item} />
                    ))}
                </div>
            </div>

            {/* PROMO CARD */}


            <div className="relative w-[1170px] h-[500px] mx-auto mb-[70px]">
                {/* Button */}
                <div className="absolute w-full h-full bg-black"></div>

                {/* Ellipse 23 */}
                <div className="absolute w-[504px] h-[500px] left-[552px] top-0 bg-gray-300 opacity-30 blur-[100px]" />
                {/* Enhance Your Music Experience */}
                <div className="absolute w-[473px] h-[120px] left-[56px] top-[121px] text-white text-[48px] font-Inter font-semibold leading-[60px] tracking-[0.04em]">
                    Enhance Your Music Experience
                </div>

                {/* Frame 601 */}
                <div className="absolute flex gap-6 w-[320px] h-[100px] left-[56px] top-[273px]">
                    {/* Flash Sell Timer 1 */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[62px] h-[62px] bg-white rounded-full relative">
                            <div className="flex flex-col gap-0 text-center">
                                <span className="text-black text-[16px] font-semibold">23</span>
                                <span className="text-black text-[11px] font-normal">Hours</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[62px] h-[62px] bg-white rounded-full relative">
                            <div className="flex flex-col gap-0 text-center">
                                <span className="text-black text-[16px] font-semibold">05</span>
                                <span className="text-black text-[11px] font-normal">Days</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[62px] h-[62px] bg-white rounded-full relative">
                            <div className="flex flex-col gap-0 text-center">
                                <span className="text-black text-[16px] font-semibold">59</span>
                                <span className="text-black text-[11px] font-normal">Minutes</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[62px] h-[62px] bg-white rounded-full relative">
                            <div className="flex flex-col gap-0 text-center">
                                <span className="text-black text-[16px] font-semibold">35</span>
                                <span className="text-black text-[11px] font-normal">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View All Products Button */}
                <div className="absolute left-[56px] top-[375px]">
                    <button className="flex justify-center items-center px-[48px] py-[16px] gap-2 bg-[#00FF66] rounded-[4px]">
                        <span className="text-white text-[16px] font-medium">Buy Now!</span>
                    </button>
                </div>

                {/* Categories */}
                <div className="absolute left-[56px] top-[69px]">
                    <span className="text-[#00FF66] text-[16px] font-semibold">Categories</span>
                </div>

                {/* Frame 694 */}
                <div className="absolute w-[600px] h-[420px] left-[526px] top-[37px] flex items-center justify-center">
        
                    <img src="/images/Products/banner.png" alt="image" />
                </div>
            </div>
        </div >
    )
}

export default ThisMonth;