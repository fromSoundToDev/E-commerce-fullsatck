import React from "react";
import exchange_icon from '../assets/exchange_icon.png'
import quality_icon from '../assets/quality_icon.png'
import support_img from '../assets/support_img.png'

export default function OurPolicy() {
  return (
    <div className="flex flex-col justify-around mb-11 sm:flex-row  items-center gap-12 sm:gap-2 text-xs sm:text-sm md:text-base  ">
      <div className="flex flex-col justify-center items-center  ">
        <img src={exchange_icon} alt="" className="w-12 mb-5 m-auto" />
        <p className="font-semibold  ">Easy Exchange Policy</p>
        <p className="font-normal text-[#898989] ">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <img src={quality_icon} alt="" className="w-12  mb-5 m-auto" />
        <p className="font-semibold  ">7 Days Return Policy</p>
        <p className="font-normal text-[#898989] ">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <img src={support_img} alt="" className="w-12  mb-5 m-auto" />
        <p className="font-semibold   ">Best Custumer Support</p>
        <p className="font-normal text-[#898989] ">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
}
