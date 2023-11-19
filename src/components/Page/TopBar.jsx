import React from 'react'
import Logo from './../../assets/Logo.png'

export default function TopBar() {
  return (
    <div className='h-[8.5rem]  w-full flex justify-between items-center bg-[#E2F2FF]'>

<div className=''>
<div id="parallelogram" className='relative'>
  </div> 
  <img src={Logo} alt="" className='absolute top-0 md:left-10  w-[6rem] md:w-[8vw]'/>
</div>

<div className='mr-10'>
<div className="my-2 p-1 bg-white flex border border-gray-200 shadow-lg rounded">
                        <div className="flex flex-auto flex-wrap"></div>
                        <div  className="p-1 px-2 appearance-none outline-none w-full font-semibold text-gray-800 ">
                          XYZ Enterprices Pvt.Ltd
                          </div>  
                        <div className="text-gray-300  w-8 py-1 pl-2 pr-1 border-l flex items-center  border-gray-200">
                            <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                //  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                 className="feather feather-chevron-up w-4 h-4 rotate-180">
                                    <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
</div>

      
    </div>
  )
}
