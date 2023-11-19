import React from 'react'
import './page.css'
import TopBar from './TopBar'
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import Rightout from './Rightout'
import Side_mob from './Side_mob'

export default function MainPage() {
  return (
    <div className=' w-[100vw] '>
        <TopBar/>
        <div className='flex '>
          <div className=' h-5 w-5 relative'></div>
          <div className='absolute inset-0 w-[12rem] top-[10rem] left-4'>

          <Side_mob/>
          </div>
         <div className='hidden md:block'>
        <SideBar/>
        </div>   
         <div >
        <Dashboard/>
        </div>  
        <div className='w-[6rem] hidden md:block bg-[#E2F2FF]'>
          <Rightout/>
           </div> 
        </div>
      
    </div>
  )
}
