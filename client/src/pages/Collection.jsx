import React from "react";
import LatestProducts from "../components/LatestProducts";

export default function Collection() {
  return (
    <div className="flex flex-col sm:grid grid-cols-6">
      <div className="col-span-1">
        <div className="text-[20px] sm:text-[22px] text-[#343434]">FILTERS</div>
        {/* filter  */}
        <div className=" flex  gap-4 justify-around sm:flex-col  ">
          {/* filter1  */}

          <div className="border-[#C8C8C8] border-[1px] flex flex-col  justify-center p-2 w-72  ">
            <h3 className=" font-normal text-[16px] text-[#212121]">
              Category
            </h3>
            <ul className=" flex flex-col  space-y-2">
              <li className=" flex flex-row items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 text-[#C1C1C1]"
                />{" "}
                <p className="text-[#272727] font-light text-[16px] ">Men</p>
              </li>
              <li className="flex flex-row items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 text-[#C1C1C1] "
                />{" "}
                <p className="text-[#272727] font-light text-[16px] ">Women</p>
              </li>
              <li className="flex flex-row items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 text-[#C1C1C1]"
                />{" "}
                <p className="text-[#272727] font-light text-[16px] ">kids</p>
              </li>
            </ul>
          </div>

          {/* filter2  */}
          <div className="border-[#C8C8C8] border-[1px] flex flex-col  justify-center p-2 w-72  ">
            <h3 className=" font-normal text-[16px] text-[#212121]">Type</h3>
            <ul className=" flex flex-col  space-y-2">
              <li className=" flex flex-row items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 text-[#C1C1C1]"
                />{" "}
                <p className="text-[#272727] font-light text-[16px] ">
                  Topwear
                </p>
              </li>
              <li className="flex flex-row items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 text-[#C1C1C1] "
                />{" "}
                <p className="text-[#272727] font-light text-[16px] ">
                  Bottomwear
                </p>
              </li>
              <li className="flex flex-row items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 text-[#C1C1C1]"
                />{" "}
                <p className="text-[#272727] font-light text-[16px] ">
                  Winterwear
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* collections  */}
      <div className="col-span-5">
        {/* collection title  */}
        <div className=""></div>

        {/* collection item  */}
        <div className="">
          {/* title  */}
          <div className="flex ">
            <h1 className="">
              <span className="">ALL</span>COLLECTIONS
            </h1>
            <hr className="" />
          </div>
          {/* selection  */}
          <select name="" id="" className="">
            <option value="" className=""></option>
          </select>
        </div>
      </div>
    </div>
  );
}
