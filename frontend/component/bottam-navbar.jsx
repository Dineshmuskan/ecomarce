import { LayoutDashboard, Menu } from "lucide-react";
import { NavLink } from "react-router";

import React from "react";

export default function BottamNavbar() {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto flex items-center justify-between">
      <div className=" flex items-center gap-8">
        <button className=" whitespace-nowrap flex gap-2 bg-green-500 py-4 px-4 text-white rounded-md font-medium ">
          <LayoutDashboard />
          All Department
        </button>
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            <p>home</p>
            <p>shop</p>
            <p>store</p>
            <p>pages</p>
            <p>account</p>
          
            <NavLink to={"/dashboard"} >Dashboard</NavLink>
            <NavLink to={"/docs"} >docs</NavLink>
          </div>
        </div>
       
      </div>
      <Menu className="block lg-hidden"/>
    </div>
  );
}
