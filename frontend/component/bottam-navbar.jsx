import { LayoutDashboard } from "lucide-react";
import React from "react";

export default function BottamNavbar() {
  return (
    <div className="w-8/12 mx-auto flex items-center justify-between">
      <div className=" flex items-center gap-8">
        <button className=" flex gap-2 bg-green-500 py-4 px-4 text-white rounded-md font-medium ">
        <LayoutDashboard />All Department
        </button>
        <p>home</p>
          <p>shop</p>
          <p>store</p>
          <p>pages</p>
          <p>account</p>
          <p>dashboard</p>
          <p>docs</p>
      </div>
      <div></div>
    </div>
  );
}
