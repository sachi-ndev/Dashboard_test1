import React, { useState } from "react";
import profileimg from '../../assets/profile.png'

export default function SideBar() {

  const [activeside,setActiveSide]=useState(1)



  return (
    <div className=" w-[12rem] h-[100%] flex flex-col items-center justify-between shadow-2xl shadow-slate-700/20 mt-4 " >
      <div className="w-full h-[14rem] flex flex-col justify-center items-center py-9 shadow-lg shadow-slate-700/20 ">
        <div className="h-[6rem] w-[6rem] rounded-full bg-slate-200 ">
            <img src={profileimg} alt="" />
        </div>
        <h1>Ram Mohan</h1>
        <p>rammohan2@gmail.com</p>
      </div>

      <div className="">
        <aside
          className="flex w-[12rem] flex-col mt-4 space-y-8  border-gray-200 bg-white p-2"
          
          x-show="asideOpen"
        >
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg font-semibold hover:bg-[rgb(178,230,254)]  hover:text-blue-600 hover:border-2 border-2 border-gray-700/5 "
            onClick={()=>setActiveSide(1)}
            id={activeside===1?'activesidebar':''}
          
          >
            <span className="text-2xl ">
              <i className="bx bx-home " />
            </span>
            <span>Dashboard</span>
          </a>
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg font-semibold hover:bg-[rgb(178,230,254)] hover:text-blue-600 border-2 border-gray-700/5 hover:border-0"
            onClick={()=>setActiveSide(2)}
            id={activeside===2?'activesidebar':''}
          
          >
            <span className="text-2xl">
              <i className="bx bx-cart" />
            </span>
            <span>Perks</span>
          </a>
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg font-semibold hover:bg-[rgb(178,230,254)] hover:text-blue-600 border-2 border-gray-700/5 hover:border-0"
            onClick={()=>setActiveSide(3)}
            id={activeside===3?'activesidebar':''}
          >
            <span className="text-2xl">
              <i className="bx bx-shopping-bag" />
            </span>
            <span>Addons</span>
          </a>
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg font-semibold hover:bg-[rgb(178,230,254)] hover:text-blue-600 border-2 border-gray-700/5 hover:border-0"
            onClick={()=>setActiveSide(4)}
            id={activeside===4?'activesidebar':''}
          >
            <span className="text-2xl">
              <i className="bx bx-heart" />
            </span>
            <span>FAQ</span>
          </a>
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg font-semibold hover:bg-[rgb(178,230,254)] hover:text-blue-600 border-2 border-gray-700/5 hover:border-0"
            onClick={()=>setActiveSide(5)}
            id={activeside===5?'activesidebar':''}
          >
            <span className="text-2xl">
              <i className="bx bx-user" />
            </span>
            <span>Support</span>
          </a>
        </aside>
      </div>

            <div className="h-full mt-[] text-blue-600 ">
                Logout
            </div>
    </div>
  );
}
