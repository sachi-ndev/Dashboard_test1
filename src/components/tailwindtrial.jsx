import React from 'react'
import { LuUser2 } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Arrow1 from './../../assets/right-arrow-triangle1.png'
import Arrow2 from './../../assets/right-arrow-triangle 2.png'
import Arrow3 from './../../assets/right-arrow-triangle 3.png'

export default function DashboardComponents() {
  return (
    <div className='h-full w-full  box-border p-[3rem] flex flex-col gap-6 '>
        <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
            <div className='aspect-[1/1.2] box-content p-[2rem]   w-[90%] md:w-[25rem] bg-white shadow-xl rounded-xl'>

                <h1 className='text-[3rem] font-semibold w-[16rem]'>Basic</h1>
                <p className='line-through text-[20px]'>$88.99/mo</p>
                <h1 className='text-[2rem] text'>9.99/mo</h1>
                <button className="bg-[rgb(248,233,174)] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
          
          Get Started <FaArrowRight />{" "}
        </button>
                <hr className="border-black "/>
                
                <div className='font-medium'>

                <p>what you'll get</p>

                <div  className="flex flex-row gap-5 items-center ">
                    <LuUser2/><h1>upto 25 user</h1>
                </div>
                <div  className="flex flex-row gap-5 items-center ">
                < IoCloudUploadOutline /><h1>upto 25gb Storage</h1>
                </div>
                <div  className="flex flex-row gap-5 items-center ">
                < MdOutlineMailOutline /><h1>Email Support</h1>
                </div>

                <div className='uppercase underline flex items-center gap-3 '>explore features
                <img src={Arrow1} className='w-5' alt="" />
                </div>
                   
                </div>


            
            </div>
            
            
            <div className='aspect-[1/1.2] box-content p-[2rem]   w-[90%] md:w-[25rem] bg-white shadow-xl rounded-xl'>

<h1 className='text-[3rem] font-semibold w-[16rem]'>Standard</h1>
<p className='line-through text-[20px]'>$189.99/mo</p>
<h1 className='text-[2rem] text'>99.99/mo</h1>
<button className="bg-[#FF9194] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">

Get Started <FaArrowRight />{" "}
</button>
<hr className="border-black "/>

<div className='font-medium'>

<p>what you'll get</p>

<div  className="flex flex-row gap-5 items-center ">
    <LuUser2/><h1>upto 50 user</h1>
</div>
<div  className="flex flex-row gap-5 items-center ">
< IoCloudUploadOutline /><h1>upto 60gb Storage</h1>
</div>
<div  className="flex flex-row gap-5 items-center ">
< MdOutlineMailOutline /><h1>Email+Chat Support</h1>
</div>

<div className='uppercase underline flex items-center gap-3 '>explore features
<img src={Arrow2} className='w-5' alt="" />
</div>
   
</div>



</div>



<div className='aspect-[1/1.2] box-content p-[2rem]   w-[90%] md:w-[25rem] bg-white shadow-xl rounded-xl'>

<h1 className='text-[3rem] font-semibold w-[16rem]'>Premium</h1>
<p className='line-through text-[20px]'>$389.99/mo</p>
<h1 className='text-[2rem] text'>199.99/mo</h1>
<button className="bg-[#D798E7] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">

Get Started <FaArrowRight />{" "}
</button>
<hr className="border-black "/>

<div className='font-medium'>

<p>what you'll get</p>

<div  className="flex flex-row gap-5 items-center ">
    <LuUser2/><h1>upto 25 user</h1>
</div>
<div  className="flex flex-row gap-5 items-center ">
< IoCloudUploadOutline /><h1>upto 25gb Storage</h1>
</div>
<div  className="flex flex-row gap-5 items-center ">
< MdOutlineMailOutline /><h1>Email Support</h1>
</div>

<div className='uppercase underline flex items-center gap-3 '>
    explore features
    <img src={Arrow3} className='w-5' alt="" />
    </div>

</div>



</div>          
           


        </div>
        <div className='flex flex-col md:flex-row md:justify-between  items-center gap-6'>
            <div className='md:aspect-[1.5/0.9] aspect-[1/1.2] w-[90%] md:w-[50%] bg-blue-500 rounded-xl'></div>
            <div className='md:aspect-[1.5/0.9] aspect-[1/1.2] w-[90%] md:w-[50%] bg-blue-500 rounded-xl'></div>
        </div>
       
      
    </div>
  )
}


//***************************************************************************************************************** */


<div className="
w-[90%] md:w-[] p-9 shadow-lg rounded-xl md:p-[1rem] flex flex-col md:flex-row overflow-hidden 
md:aspect-[1.5/] 
aspect-[1/] 
">          <div className="md:w-[50%]  h-full flex flex-col items-start justify-center md:mt-3 ">
    <div className="self-center">

    <button className="bg-[#D798E7]  flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
   Let's Connect
  </button>
    <h1 className="text-[2rem] font-semibold">Enterprice Plan</h1>
    <p className="text-[.8rem]">
      The quickest and easiest way to try protocols with basic
      functionalities
    </p>

    <button className="bg-[#D798E7]  flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
    Contact us <FaArrowRight />
  </button>

    </div>
  </div>
  <div className="md:w-[50%] h-[100%] flex  my-auto text-[.8rem] ">
    <div className="self-center">
    <p className="font-medium">what you'll get</p>

    <div className="flex flex-row items-center gap-3">
      <LuUser2 />
      <h1 className="font-medium">More 75 than user</h1>
    </div>

    <div className="flex flex-row items-center gap-3">
      <BiCheckDouble />
      <h1 className="font-medium text-[.8rem] w-[80%]">
       Customization of all other features
      </h1>
    </div>
    

  </div>
  </div>
</div>