import React from "react";
import "./app.css";

import TopNavbar from "../component/top-navbar";
import MiddleNavbar from "../component/middle-navbar";
import BottamNavbar from "../component/bottam-navbar";
import HeroSectionComponent from "../component/hero-section-component";
import FeatureCategoriesSection from "../component/feature-categories-section";
import BannerSection from "../component/banner-section";
import PapularProductSection from "../component/papular-product-section";

export default function App() {
  return (
    <div className=" space-y-4">
      <TopNavbar />
      <MiddleNavbar />
      <BottamNavbar />
      <hr className=" text-gray-200" />
      <HeroSectionComponent />
      <FeatureCategoriesSection />
      <BannerSection />
      <PapularProductSection />
    </div>
  );
}
