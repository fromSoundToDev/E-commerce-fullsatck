import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 ">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

      <div className="">
        <img src={logo} alt="" className=" w-24" />
        <p className=" w-full md:2/3 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="grid-cols-1 sm:col-span-1">
        <h2 className="">COMPANY</h2>
        <ul className="">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/"}>
            <li>About</li>
          </Link>
          <Link to={"/delivery"}>
            <li>Delivery</li>
          </Link>
          <Link to={"/policy"}>
            <li>Privacy Policy</li>
          </Link>
        </ul>
      </div>
      <div className="grid-cols-1 sm:col-span-1">
        <h2 className="">GET IN TOUCHE</h2>
        <p className="">+228 97 27 24 97</p>
        <Link>
          <p className="">agalahonore27@gmail.com</p>
        </Link>
      </div>
      </div>

      <hr className="" />
      <p className="">Copyright 2024 © H.dev - All Right Reserved.</p>
    </div>
  );
}
