import React from "react";
import { LuUser2 } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BiCheckDouble } from "react-icons/bi";

import Arrow1 from "./../../assets/right-arrow-triangle1.png";
import Arrow2 from "./../../assets/right-arrow-triangle 2.png";
import Arrow3 from "./../../assets/right-arrow-triangle 3.png";

export default function DashboardComponents() {
  return (
    <div className="h-full w-full  box-border p-[3rem] flex flex-col gap-6 ">
      <div className=" flex flex-col md:flex-row items-center md:justify-between md:w-[90%] mx-auto gap-6">
        <div className="aspect-[1/1.2] w-[110%] p-[10px] md:w-[18rem] self-center bg-white shadow-xl rounded-xl ">
          <h1 className="text-[2rem] font-medium">Basic</h1>
          <p>$88.99/mo</p>
          <h1 className="text-[2rem]">9.99/mo</h1>
          <button className="bg-[rgb(248,233,174)] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
            Get Started <FaArrowRight />
          </button>
          <hr />
          <p className="font-medium">what you'll get</p>

          <div className="flex flex-row items-center gap-3">
            <LuUser2 />
            <h1 className="font-medium">upto 25 user</h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <IoCloudUploadOutline />
            <h1 className="font-medium">upto 25gb Storage</h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <MdOutlineMailOutline />
            <h1 className="font-medium text-[.9rem]">Email Support</h1>
          </div>

          <div className="uppercase underline flex items-center gap-3 ">
            explore features
            <img src={Arrow1} className="w-5" alt="" />
          </div>
        </div>

        <div className="aspect-[1/1.2] w-[110%] p-[10px] md:w-[18rem] self-center bg-white shadow-xl rounded-xl ">
          <h1 className="text-[2rem] font-medium">Standard</h1>
          <p>$189.99/mo</p>
          <h1 className="text-[2rem]">99.99/mo</h1>
          <button className="bg-[#FF9194]  flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
            Get Started <FaArrowRight />
          </button>
          <hr />
          <p className="font-medium">what you'll get</p>

          <div className="flex flex-row items-center gap-3">
            <LuUser2 />
            <h1 className="font-medium">upto 50 user</h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <IoCloudUploadOutline />
            <h1 className="font-medium">upto 60gb Storage</h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <MdOutlineMailOutline />
            <h1 className="font-medium text-[.9rem]">Email+Chat Support</h1>
          </div>

          <div className="uppercase underline flex items-center gap-3 ">
            explore features
            <img src={Arrow2} className="w-5" alt="" />
          </div>
        </div>

        <div className="aspect-[1/1.2] w-[110%] p-[10px] md:w-[18rem] self-center bg-white shadow-xl rounded-xl ">
          <h1 className="text-[2rem] font-medium">Premium</h1>
          <p>$389.99/mo</p>
          <h1 className="text-[2rem]">199.99</h1>
          <button className="bg-[#D798E7]  flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
            Get Started <FaArrowRight />
          </button>
          <hr />
          <p className="font-medium">what you'll get</p>

          <div className="flex flex-row items-center gap-3">
            <LuUser2 />
            <h1 className="font-medium">upto 75 user</h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <IoCloudUploadOutline />
            <h1 className="font-medium">upto 100gb Storage</h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <MdOutlineMailOutline />
            <h1 className="font-medium text-[.9rem]">
              Email+Chat+Whatsapp Support
            </h1>
          </div>

          <div className="uppercase underline flex items-center gap-3 ">
            explore features
            <img src={Arrow3} className="w-5" alt="" />
          </div>
        </div>
      </div>
      <div className="mb-[20rem] md:mb-0 flex flex-col md:flex-row md:justify-between md:w-[90%] mx-auto  items-center gap-6 font-medium">
        <div className="
        w-[100%] md:w-[]  p-9 shadow-lg rounded-xl md:p-[1rem] flex flex-col md:flex-row overflow-hidden 
        md:aspect-[1.5/] 
        aspect-[1/] 
        ">
          <div className="md:w-[50%]  h-full flex flex-col items-start justify-center md:mt-3 ">
            
            <button className="bg-[#CBFF91] text-[.8rem] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
            Free Forever
          </button>
            <h1 className="md:text-[2vw] text-[6vw] font-semibold">Free Starter</h1>
            <p className="text-[.8rem]">
              The quickest and easiest way to try protocols with basic
              functionalities
            </p>

            <button className="bg-[#CBFF91] mt-2 text-[.8rem] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
            Get Started <FaArrowRight />
          </button>

          </div>
          <div className="md:w-[50%] h-[100%] flex  text-[.8rem] ">
            <div className="self-center">
            <p className="font-medium">what you'll get</p>

            <div className="flex flex-row items-center gap-3">
              <LuUser2 />
              <h1 className="font-medium">upto 8 user</h1>
            </div>
            <div className="flex flex-row items-center gap-3">
              <IoCloudUploadOutline />
              <h1 className="font-medium">upto 3gb Storage</h1>
            </div>
            <div className="flex flex-row items-center gap-3">
              <MdOutlineMailOutline />
              <h1 className="font-medium text-[.9rem]">
                Email
              </h1>
            </div>
            <div className="flex flex-row items-center gap-3">
              <BiCheckDouble />
              <h1 className="font-medium text-[.8rem] w-[80%]">
                Basic of Documents task Flow,Voting, Accounting, Banking,Notes,Investor, <br />Director and Team, Management included
              </h1>
            </div>
            

          </div>
          </div>
        </div>




        <div className="
        w-[100%] md:w-[]  p-9 shadow-lg rounded-xl md:p-[1rem] flex flex-col md:flex-row overflow-hidden 
        md:aspect-[1.5/] 
        aspect-[1/] 
        ">
          <div className="md:w-[50%]  h-full flex flex-col items-start justify-center md:mt-3 ">
            
            <button className="bg-[#90B6F4] text-[.8rem] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
            Let's Connect
          </button>
            <h1 className="md:text-[2vw] text-[6vw] font-semibold">Enterprice Plan</h1>
            <p className="text-[.8rem]">
              The quickest and easiest way to try protocols with basic
              functionalities
            </p>

            <button className="bg-[#90B6F4] mt-2 text-[.8rem] flex items-center gap-2 px-6 py-1 mb-4 rounded-lg">
            Contact us <FaArrowRight />
          </button>

          </div>
          <div className="md:w-[50%] h-full flex flex-col my-auto  text-[.8rem] ">
            {/* <div className=" flex flex-col justify-center"> */}
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
            

          {/* </div> */}
          </div>
        </div>


      </div>
    </div>
  );
}
