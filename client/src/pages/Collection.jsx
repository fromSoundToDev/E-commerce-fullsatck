import React, { useContext, useEffect, useState } from "react";
import LatestProducts from "../components/LatestProducts";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets/";
import ProductItem from "../components/ProductItem";



export default function Collection() {
  const [filterProduct,setFilterProduct] = useState([])
  const [filter,setFilter] = useState(false)

 const {products}  = useContext(ShopContext)

 useEffect(() => {
   setFilterProduct(products)
 }, [])
 
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-6 gap-2">
      <div className="col-span-1 py-4">
        <p   onClick={()=>setFilter(!filter)}  className="text-[20px] sm:text-[22px] flex items-center  text-[#343434]">FILTERS <img src={assets.dropdown_icon} alt="" className={`h-4 sm:hidden  mx-2 ${filter?'rotate-90':''}  `} />
        </p>
        {/* filter  */}
        <div className={`${filter?'':'hidden'} sm:block` }>
          <div className="flex gap-4 justify-around sm:flex-col">
          {/* filter1  */}
          <div className="border-[#C8C8C8] border-[1px] flex flex-col  justify-center p-2 w-72 sm:w-full  ">
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
          <div className="border-[#C8C8C8] border-[1px] flex flex-col  justify-center p-2 w-72 sm:w-full   ">
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
      </div>
      {/* collections  */}
      <div className="col-span-5 px-4">
        {/* collection title  */}
        <div className=" flex flex-row justify-between px-2">
          {/* title  */}
          <div className="flex items-center">
            <h1 className="font-normal text-xl sm:text-2xl">
              <span className="text-[#707070]">ALL</span>COLLECTIONS
            </h1>
            <hr className=" w-10 h-[2px] bg-[#252525]" />
          </div>
          {/* selection  */}
          <select name="" id="" className=" border-gray-300 text-sm p-2">
            <option value="" className="">
              sort by: relevant
            </option>
            <option value="" className="">
              sort by: hight to low
            </option>
            <option value="" className="">
              sort by: low to hight
            </option>
          </select>
        </div>

        {/* collection item  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

          {
            filterProduct.map((el,index)=>{
           return   <ProductItem
              key={index}
              name={el.name}
              price={el.price}
              id={el._id}
              image={el.image}
              />
            })
          }

        </div>
        
      </div>
    </div>
  );
}
