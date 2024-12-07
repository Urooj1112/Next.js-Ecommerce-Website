// import { ChevronDown } from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const FirstHeader = () => {
  return (
    <div className='w-[1440] h-12 bg-[#000000] text-white text-[14px] flex items-center justify-evenly'>
        <div className='flex'>
       <p className=''> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!!!
       </p>
       <Link href='/' className='font-semibold underline underline-offset-2 ml-4'>ShopNow</Link>
       </div>
       <div className='flex items-center'>
        <p>English</p>
        {/* <ChevronDown className="ml-2" /> */}
       </div>
       
       
    </div>
  )
}

export default FirstHeader;
