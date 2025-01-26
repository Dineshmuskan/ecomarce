import React from "react";
import { UsersRound } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Heart, MapPinHouse } from "lucide-react";
import mylogo from ".././public/logo.svg";

export default function MiddleNavbar() {
  return (
    <div className="flex justify-between w-8/12 mx-auto ">
      <div>
        <img src={mylogo} alt="logo" />
      </div>
      <div className="flex gap-8">
        <input
          className="border  border-green500 rounded-md w-96 pl-2"
          type="text"
          placeholder="search loaction"
        />
        <button className="flex   gap-2 items-center border border-green-500 px-4 rounded-md hover; bg-gray-300 hover:cursor-pointer">
          {" "}
          <MapPinHouse size={16} />
          loaction
        </button>
      </div>
      <div className="flex gap-4">
        <Heart />
        <UsersRound />
        <ShoppingBag />
      </div>
    </div>
  );
}
