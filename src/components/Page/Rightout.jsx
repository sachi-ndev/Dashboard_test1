import React from "react";

export default function Rightout() {
  return (
    <div className="w-full h-[90vh] flex flex-col justify-between items-end p-3 ">
      <div className=" w-[3rem] flex items-center  h-[4rem] rounded-lg bg-white">
        <div className="ml-4 relative">
            <div className="h-2 w-2 rounded-full absolute top-0 right-0 bg-red-400"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  text-blue-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className=" h-[8rem] w-[3rem] bg-white rounded-bl-2xl rounded-tl-2xl"></div>
        <div className=" h-[2rem] w-[2rem] mt-7 rounded-full flex items-center justify-center bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
