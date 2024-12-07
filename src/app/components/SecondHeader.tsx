import React from 'react'
import Link from 'next/link';
const SecondHeader = () => {
    return (
        <div>
            <div className='w-[1170px] h-[95px] mx-auto flex items-center '>
                <div className="relative flex flex-row items-center justify-end gap-36 w-full">
            {/* Left side */}
                    <div className="absolute left-0 text-black text-2xl font-bold">Exclusive</div>

                    {/* Navbar */}
                    <ul className="flex gap-12">
                        <li className="text-sm text-black font-normal">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-sm text-black font-normal">
                            <Link href="/Contact">Contact</Link>
                        </li>
                        <li className="text-sm text-black font-normal">
                            <Link href="/About">About</Link>
                        </li>
                        <li className="text-sm text-black font-normal">
                            <Link href="/signup">Sign Up</Link>
                        </li>
                    </ul>

                    <div className='flex gap-3'>
                        {/* Search Box */}
                        <div className="w-[243px] h-[38px] bg-[#F5F5F5] flex items-center rounded-md pl-[20px] py-[7px] pr-[12px]">
                            <div className='flex items-center justify-between w-[211px]'>
                                <input type="text" placeholder="What are you looking for?" className="w-[153px] text-black text-xs opacity-50" />
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            
                            </div>

                        </div>

                        {/* Icons */}
                        <Link href="" className="w-8 h-8 flex items-center justify-center rounded-md relative">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.25 3.75H5.25L7.5 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='w-4 h-4 absolute top-[0.25%] right-[0.12%] bg-[#DB4444] rounded-full flex items-center justify-center'><p className='text-[12px] text-[#FAFAFA]'>2</p></div>
                        </Link>
                        {/* Profile Icon */}
                        <Link href="" className="w-8 h-8 flex items-center justify-center rounded-md">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="w-full h-[0px] opacity-30 border-b-[0.5px] border-black transform rotate-180"></div>
        </div>
    )
}

export default SecondHeader;

