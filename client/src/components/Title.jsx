import React from 'react'

export default function Title({text1,text2}) {
  return (
    <div>
        <div className=" flex flex-row gap-2 justify-center items-center ">
        <h1 className=" text-gray-400 text-sm sm:text-[35px] leading-4">{text1}</h1>
        <h1 className="text-sm sm:text-[35px] text-black leading-9 font-semibold"> {text2}</h1>
        <hr className="w-8 h-1 bg-black" />
        </div>
        <p className="font-semibold text-sm sm:text-[18px] text-center leading-4 text-gray-400 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

    </div>
  )
}
