import React from 'react'
import './page.css'
import TopBar from './TopBar'
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import Rightout from './Rightout'

export default function MainPage() {
  return (
    <div className=' w-[100vw] '>
        <TopBar/>
        <div className='flex'>
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
