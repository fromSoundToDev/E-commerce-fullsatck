import React from 'react';
import hero_img from '../assets/hero_img.png'

export default function Hero() {
  return (
    <div className='flex flex-col w-full border-2 border-slate-400 h-96  sm:flex-row '>
        <div className=" h-[50%] ">
            <hr className="" />
            <p className="">our BESTSELLERS</p>
            <h1 className="">LATEST ARRIVALS</h1>
            <p className="">SHOP NOW</p>

        </div>
        <div className="h-[50%]  ">
            <img src={hero_img} alt="" className='w-5 ' />
        </div>
    </div>
  )
}
