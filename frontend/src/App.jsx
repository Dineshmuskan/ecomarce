import React from "react";
import "./app.css";

import TopNavbar from "../component/top-navbar";
import MiddleNavbar from "../component/middle-navbar";
import BottamNavbar from "../component/bottam-navbar";
import HeroSectionComponent from "../component/hero-section-component";


export default function App() {
  return (
    <div className=" space-y-4">
      <TopNavbar />
      <MiddleNavbar />
      <BottamNavbar/>
      <hr className=" text-gray-200"/>
      <HeroSectionComponent/>
    </div>
  );
}
