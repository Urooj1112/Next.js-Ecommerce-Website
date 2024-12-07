"use client"
import React, { useState, useEffect } from 'react';
import CardComponent from './FlashSaleCard';

const mockData = [
    {
        title: 'HAVIT HV-G92 Gamepad',
        originalPrice: '$160',
        discountedPrice: '$120',
        discountPercent: '-35%',
        imageUrl: '/images/Products/gamingConsole.png',
        rating: 4
    },
    {
        title: 'Logitech MX Master 3',
        originalPrice: '$100',
        discountedPrice: '$80',
        discountPercent: '-20%',
        imageUrl: '/images/products/gamingkeyboard.png',
        rating: 5
    },
    {
        title: 'HAVIT HV-G92 Gamepad',
        originalPrice: '$160',
        discountedPrice: '$120',
        discountPercent: '-35%',
        imageUrl: '/images/products/gamingMoniter.png',
        rating: 4
    },
    {
        title: 'Razer DeathAdder V2',
        originalPrice: '$70',
        discountedPrice: '$50',
        discountPercent: '-28%',
        imageUrl: '/images/Products/comfortChair.png',
        rating: 3
    },
    {
        title: 'Logitech MX Master 3',
        originalPrice: '$100',
        discountedPrice: '$80',
        discountPercent: '-20%',
        imageUrl: '/images/products/CPUcooler.png',
        rating: 5
    },

];

const FlashSales = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    if (minutes > 0) {
                        minutes -= 1;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours -= 1;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            if (days > 0) {
                                days -= 1;
                                hours = 23;
                                minutes = 59;
                                seconds = 59;
                            } else {
                                clearInterval(interval);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className='mx-auto relative h-[600px] w-[1170px] mb-36'>
            <div className='flex mb-10'>
                <div className='absolute left-0 top-0 bg-[#DB4444] rounded w-5 h-10'></div>

                {/* Main Content */}
                <div className='flex flex-row items-end justify-between gap-[87px] h-[103px] w-[600px]'>
                    {/* Column for Today’s Flash Sale */}
                    <div className='flex flex-col items-start gap-6 w-[220px]'>
                        <div className='text-[#DB4444] font-poppins font-semibold text-[16px] leading-[20px] ml-9'>
                            Today’s
                        </div>
                        <div className='text-[#000000] font-Inter font-semibold text-[34px] leading-[48px] tracking-wider'>
                            Flash Sales
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className='flex flex-row items-center gap-[16px]'>
                        {/* Days */}
                        <div className='flex flex-col items-start gap-[4px]'>
                            <div className='text-[#000000] font-poppins font-medium text-[12px] leading-[18px]'>
                                Days
                            </div>
                            <div className='text-[#000000] font-Inter font-bold text-[32px] leading-[30px] tracking-[0.04em]'>
                                {timeLeft.days}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='w-[4px] h-[4px] bg-[#E07575] rounded-full'></div>
                            <div className='w-[4px] h-[4px] bg-[#E07575] rounded-full'></div>
                        </div>

                        {/* Hours */}
                        <div className='flex flex-col items-start gap-[4px]'>
                            <div className='text-[#000000] font-medium text-[12px] leading-[18px]'>
                                Hours
                            </div>
                            <div className='text-[#000000] font-Inter font-bold text-[32px] leading-[30px] tracking-[0.04em]'>
                                {timeLeft.hours}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='w-[4px] h-[4px] bg-[#E07575] rounded-full'></div>
                            <div className='w-[4px] h-[4px] bg-[#E07575] rounded-full'></div>
                        </div>

                        {/* Minutes */}
                        <div className='flex flex-col items-start gap-[4px]'>
                            <div className='text-[#000000] font-medium text-[12px] leading-[18px]'>
                                Minutes
                            </div>
                            <div className='text-[#000000] font-Inter font-bold text-[32px] leading-[30px] tracking-[0.04em]'>
                                {timeLeft.minutes}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='w-[4px] h-[4px] bg-[#E07575] rounded-full'></div>
                            <div className='w-[4px] h-[4px] bg-[#E07575] rounded-full'></div>
                        </div>

                        {/* Seconds */}
                        <div className='flex flex-col items-start gap-[4px]'>
                            <div className='text-[#000000] font-poppins font-medium text-[12px] leading-[18px]'>
                                Seconds
                            </div>
                            <div className='text-[#000000] font-Inter font-bold text-[32px] leading-[30px] tracking-[0.04em]'>
                                {timeLeft.seconds}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[103px] w-[570px] relative'>
                    <div className="flex items-start gap-2 w-[100px] h-[46px] absolute right-0 bottom-0">
                        {/* Left Arrow Button */}
                        <div className="relative w-[46px] h-[46px]">
                            <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />
                            <div className="absolute left-[23.91%] right-[23.91%] top-[23.91%] bottom-[23.91%] flex items-center justify-center">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L1 8L8 15M1 8H17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        {/* Right Arrow Button */}
                        <div className="relative w-[46px] h-[46px] flex-none">
                            <div className="absolute inset-0 bg-[#F5F5F5] rounded-full" />
                            <div className="absolute left-[23.91%] right-[23.91%] top-[23.91%] bottom-[23.91%] flex items-center justify-center transform rotate-180">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L1 8L8 15M1 8H17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div id='flashSalesSwipe' className="w-[1305px] flex gap-[30px] overflow-x-auto"
                >
                    <style>
                        {`#flashSalesSwipe::-webkit-scrollbar{ 
                        display: none;
                        }`}
                    </style>
                    {mockData.map((item, index) => (
                        <CardComponent
                            key={index}
                            title={item.title}
                            originalPrice={item.originalPrice}
                            discountedPrice={item.discountedPrice}
                            discountPercent={item.discountPercent}
                            imageUrl={item.imageUrl}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='h-[176px] flex items-center justify-center relative'>
                <button className='flex items-center justify-center py-4 px-12 gap-[10px] bg-[#DB4444] rounded w-[234px] h-14 text-[16px] text-[#FAFAFA] mx-auto'>View All Products</button>
                <div className='absolute w-[1170px] bottom-0 h-0 opacity-30 border-b-[0.5px] border-solid border-black transform rotate-180' />
            </div>
        </div>
    );
};

export default FlashSales;
