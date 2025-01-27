import React from 'react'
import bannerone from "../public/banner1.png"
import bannertwo from "../public/banner2.jpg"

export default function BannerSection() {
  return (
    <div className=" w-8/12 mx-auto grid grid-cols-2 gap-4 mt-24">
      <div className=" relative h-64  ">
        <img
          src={bannerone}
          alt="banner-one"
        />
        <div className=" absolute top-8 left-8 ">
          <p className=" text-2xl font-semibold">Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className=" relative h-64">
        <img
          src={bannertwo}
          alt="banner-two"
        />
        <div className=" absolute top-8 left-8">
          <p className=" text-2xl font-semibold">Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Hello world</button>
        </div>
      </div>
    </div>
  )
}
