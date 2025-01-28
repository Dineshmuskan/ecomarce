import React from "react";
import myimage from "../public/biscuit.jpg";
import ReactStars from "react-stars";

export default function PapularProductSection() {
  const products = [
    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },

    {
      image: myimage,
      categoey: "productname",
      rating: 4,
      price: 200,
      previeusprice: 400,
    },
  ];

  return (
    <div className="w-8/12 mx-auto mt-24 space-y-8">
      <p className=" text-3xl font-semibold">Papular-Product</p>

     <div className="grid grid-ols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
     {products.map((eachitm, index) => (
        <div key={index} className=" border border-amber-400 rounded-md flex flex-col items-center justify-center p-4 space-y-1.5">
          <img src={myimage} alt="" />

          <p className="font-semibold opacity-50 text-xs">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="font-semibold text-sm">
            Lorem ipsum dolor sit amet
          </p>
          <div className=" flex items-center gap-2 text-sm">
            <ReactStars value={4} count={5} size={16} color2={"#ffd700"} />
            <p>4.3.3</p>
          </div>

          <div className=" flex items-center justify-between w-full">
            <p className="font-semibold">
              $21.6
              <span className=" opacity-70">$24</span>
            </p>
            <button className=" bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-xs">
              + add
            </button>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
}
