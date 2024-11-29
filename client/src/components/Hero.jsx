import React from "react";
import hero_img from "../assets/hero_img.png";

export default function Hero() {
  return (
    <div className=" flex flex-col gap-6 w-full border-2 border-slate-400   sm:flex-row ">
      <div className=" flex flex-col w-full sm:w-1/2 justify-center items-center ">
        <div className="flex flex-row gap-2 items-center px-2">
          <hr className="w-8 h-[2px] bg-black" />
          <p className="text-sm sm:text-base">our BESTSELLERS</p>
        </div>
        <h1 className="prata-regular px-2">Latest Arrivals</h1>
        <div className="flex flex-row gap-2 items-center px-2">
          <p className="text-sm sm:text-base">SHOP NOW</p>
          <hr className="w-8 h-[2px] bg-black" />
        </div>
      </div>
      
        <img src={hero_img} alt="" className="w-full sm:w-1/2" />
     
    </div>
  );
}
