import React, { useState } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.png";
import profile_icon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.png";
import menu_icon from "../assets/menu_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";
import { Link, Links, NavLink } from "react-router-dom";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="flex py-4 gap-6 items-center justify-between ">
      {/* logo */}
      <div className="">
        <img src={logo} alt="" className="w-24" />
      </div>

      {/* middle nav  */}

      <ul className=" hidden sm:flex gap-6 ">
        <NavLink className=" flex flex-col items-center justify-center" to="/">
          <p className="">Home</p>
          <hr className=" hidden bg-black w-2/4 h-[2px]" />
        </NavLink>
        <NavLink
          className=" flex flex-col items-center justify-center"
          to="/collection"
        >
          <p className="">Collection</p>
          <hr className=" hidden bg-black w-2/4 h-[2px]" />
        </NavLink>
        <NavLink
          className=" flex flex-col items-center justify-center"
          to="/about"
        >
          <p className=""> About</p>
          <hr className=" hidden bg-black w-2/4 h-[2px]" />
        </NavLink>
        <NavLink
          className=" flex flex-col items-center justify-center"
          to="/contact"
        >
          <p className="">Contact</p>
          <hr className="  hidden bg-black w-2/4 h-[2px] " />
        </NavLink>
      </ul>
      {/* right nav  */}

      <div className="flex gap-4">
        <div className="">
          <img src={search_icon} alt="" className="w-5 h-5 cursor-pointer" />
        </div>
        <div className=" group relative">
          <img src={profile_icon} alt="" className="w-5 h-5  cursor-pointer" />
          <div className="absolute group-hover:block hidden dropdown-menu right-0 pt-4">
            <div className="flex flex-col w-36 gap-2 py-3 px-5 bg-slate-100 rounded text-gray-500">
              <NavLink className="hover:text-black">Profile</NavLink>
              <NavLink className="hover:text-black">Orders</NavLink>
              <NavLink className="hover:text-black">Logout</NavLink>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={cart_icon} alt="" className=" cursor-pointer w-5 h-5" />
          <p className="absolute w-4 bg-black rounded-full text-center leading-4 right-[-5px] bottom-[-5px] aspect-square text-sm  text-slate-100 text-[8px]">
            10
          </p>
        </div>
        <div className="">
         <img 
            onClick={()=>setVisible(true)} 
            src={menu_icon}
            alt=""
            className= "cursor-pointer w-5 h-5 sm:hidden "
          />
        </div>
        {/* side bar  */}

        <div className= {`${visible?"w-full":"w-0"} overflow-hidden top-0 right-0 bottom-0 bg-white absolute transition-all`} >
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-6 px-2 py-3 border-b-2  ">
              <img onClick={()=>setVisible(false)} src={dropdown_icon} alt=""  className=" w-3 rotate-180"/>
              <p className=" text-black text-base ">Back</p>
            </div>
            
              <Link onClick={()=>setVisible(false)}  to="/" className=" border-b-2 p-2 text-gray-600 text-base">Home</Link>
              <Link onClick={()=>setVisible(false)}  to="/collection" className=" border-b-2 p-2 text-gray-600 text-base">Collection</Link>
              <Link onClick={()=>setVisible(false)} to="about" className=" border-b-2 p-2 text-gray-600 text-base">About</Link>
              <Link onClick={()=>setVisible(false)} to="/contact" className=" border-b-2 p-2 text-gray-600 text-base">Contact</Link>
            
          </div>

        </div>
      </div>
    </nav>
  );
}
