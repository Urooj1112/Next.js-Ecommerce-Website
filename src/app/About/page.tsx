import Image from "next/image"
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import Services from "../components/Services";
function AboutPage(){
    return(
        <div>
        <div className="w-full flex justify-center items-start">
            <div className="sm:w-full md:w-[80%]  my-11 flex sm:flex-col md:flex-row justify-center items-start gap-x-5 gap-y-6">
               {/* left */}
                 <div className="sm:w-full md:w-[60%] sm:p-8 md:p-0">
                    <h1 className="sm:text-xl md:text-3xl  font-bold ">Our Story</h1>
                    <p className="pt-6">Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p  className="mt-5">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                 </div>
             {/* right */}
            <div className="sm:w-full md:w-[600px]  cursor-pointer ">
                <Image src={"/images/Products/about.png"}
                width={400}
                height={500}
                alt="Mobile"
                className="w-full"></Image>

            </div>
            </div>
        </div>
        <div className="w-full flex justify-center items-center mt-10 mb-1 ">
            {/* container */}
            <div className="sm:w-full md:w-[80%]  border-b-2 border-neutral-100 pb-10">

                {/* container boxes */}
              

                <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 mb-4 sm:flex-wrap  lg:flex-nowrap">
                    {/* box1 */}
                    <div className=" shadow-lg border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><BiStoreAlt  /></span>
                  <span className='text-xl font-bold '>10.5k </span>
                  <p  className='sm:text-[8px]  md:text-sm'>Sallers active our site</p>
                 </div>
                    
                    {/* box2 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md hover:bg-red-500  sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><AiOutlineDollar /></span>
                  <span className='text-xl font-bold '>33k</span>
                  <p  className='sm:text-[8px]  md:text-sm'>Monthly Produduct Sale</p>
                 </div>
                    {/* box 3 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><MdOutlineShoppingBag /></span>
                  <span className='text-xl font-bold '>45.5k </span>
                  <p className='sm:text-[8px]  md:text-sm'>Customer active in our site</p>
                 </div>
                    {/* box4 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><TbMoneybag /></span>
                  <span className='text-xl font-bold '>25k </span>
                  <p  className='sm:text-[8px]  md:text-sm'>Anual gross sale in our site</p>
                 </div>
               
                   {/* box complete */}
                   
                </div>
            </div>
         </div>
       
         <Services/>
        </div>
     )
}
export default AboutPage