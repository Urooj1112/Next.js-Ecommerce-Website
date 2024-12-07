import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";


function Contact(){
    return(
        <div className="w-full sm:h-full md:h-[500px] sm:mt-3 md:mt-0 sm:mb-8 md:mb-0 flex justify-center items-center ">
             <div className="sm:w-full md:w-[90%]  flex sm:flex-col md:flex-row gap-7 ">

                   {/* left side */}
                   <div className=" shadow-lg sm:w-full md:w-[30%] h-[400px] flex flex-col justify-evenly">
                            {/* top div */}
                            <div className=' pl-3'>
                                 {/* heading */}
                                 <div className='flex justify-start items-center   '>
                                <span className='my-2 bg bg-red-500 p-3 pl-3 rounded-[50%]'> <AiOutlineMail className="text-xl text-white" /></span>
                                 <h2 className='text-xl font-bold pl-3'>Call To Us</h2>
                                 </div>
                                 <ul className='gap-y-1 flex flex-col '>
                                    <li  className='text-sm pl-3 '>We are available 24/7, 7 days  a week.</li>
                                    <li  className='text-sm pl-3'>Phone: +8801611112222</li>
                                 </ul>
                            </div>
                            <hr /> 
                            {/* bottom div */}
                            <div className='pl-3 '>
                                 {/* heading */}
                                 <div className='flex justify-start items-center   '>
                                <span className='my-2 bg bg-red-500 p-3 pl-3 rounded-[50%]'> {<FiPhone  className="text-xl text-white"/>  }</span>
                                 <h2 className='text-xl font-bold pl-3'>Write To US</h2>
                                 </div>
                                 <ul className='gap-y-1 flex flex-col  '>
                                    <li  className='text-sm pl-3 '>Fill out our form and we will contact you within 24 hours.</li>
                                    <li  className='text-sm pl-3'>Emails: customer@exclusive.com</li>
                                    <li  className='text-sm pl-3'>Emails: support@exclusive.com</li>
                                 </ul>
                            </div>
                           
                   </div>
                   {/* style an right side */}
                   {/* right side */}
                   <div className=" shadow-lg sm:w-full md:w-[70%] h-[400px]  ">
                   
                   <form action="" className='flex sm:flex-col md:flex-row lg:flex-row gap-x-2 flex-wrap  md:justify-between items-start'>
              <input type="text" placeholder="Name" className="py-3 px-3 sm:mt-1 md:mt-5 sm:w-full md:w-[200px] bg-gray-200 rounded-md "/> <br />
              <input type="email" placeholder="Email or Phone Number" className="py-3 px-3 sm:w-full md:w-[200px] sm:mt-0 md:mt-5 bg-gray-200 rounded-md "/> <br />
              <input type="password" placeholder="password" className="py-3 px-3 sm:mt-0 sm:w-full md:w-[200px] md:mt-5 bg-gray-200 rounded-md "/>
              {/* <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm  '>Create Account</button> */}
              </form>
               
               <div className='w-full sm:h-[100px] md:h-[150px] lg:h-[200px]  bg-gray-200 mt-4 rounded-md'>
                    <input type="password" placeholder="Your Message" className="py-1 rounded-md px-3 mt-5 bg-gray-200"/> <br />  
               </div>
              <input className="py-2 px-12  bg-red-500 hover:bg-red-600 mt-2 text-white rounded-sm  " type="button" value="Send Massage" />
              </div>
               
             </div>
        </div>
    )
}
export default Contact