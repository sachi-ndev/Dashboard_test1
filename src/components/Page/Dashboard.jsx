import React, { useState } from 'react'
import DashboardComponents from './DashboardComponents'
import './page.css'

export default function Dashboard() {

  const [activedash,setActiveDash]=useState(1)



  return (
    <div className=' w-[90vw] md:w-[calc(100vw-17rem)] ml-9 md:ml-0 flex flex-col' >
      <div className='  flex items-center justify-between px-8 py-10 '>
        <h1 className=' text-[5vw] sm:text-[1rem] md:text-[2.5vw] font-Poppins font-semibold '>Choose a plan that's just right for you !</h1>
       
        <div className='flex md:flex-row flex-col  md:gap-3 px-1 py-1 border-2 border-slate-300 rounded-3xl md:rounded-full'>
        <button className='bg-[#ffffff]  px-[3vw] py-[1vh]  rounded-full'
        onClick={()=>setActiveDash(1)}
        id={activedash===1?'activeblue':''}
        >Monthly</button>

        <button className='bg-[#fefeff] px-[3vw] py-[1vh] rounded-full relative'
        onClick={()=>setActiveDash(2)}
        id={activedash===2?'activeblue':''}
        >Annually
        <div className='text-green-400 text-xs absolute top-0 right-4'>-10%</div>
        </button>

        </div>
      </div>

      <div className='w-full h-full '>
        <DashboardComponents/>
      </div>
    </div>
  )
}
