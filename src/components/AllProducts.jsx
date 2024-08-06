import React, { useEffect, useState } from "react";
import style from "../styles";
import CardProduct from "./CardProduct";
import {
  productsRfid,
  miniPc,
  Printer,
  MesinDispenser,
} from "../constants/products";
export default function AllProducts() {
  const category = ["RFID Reader", "Mini Pc", "Printer", "Mesin Dispenser"];
  const [Products, seProduct] = useState([]);
  const [productTarget, setProductTarget] = useState("RFID Reader");
  useEffect(() => {
    if (productTarget == "RFID Reader") {
      seProduct(productsRfid);
    } else if (productTarget == "Mini Pc") {
      seProduct(miniPc);
    } else if (productTarget == "Printer") {
      seProduct(Printer);
    } else {
      seProduct(MesinDispenser);
    }
  }, [productTarget]);
  return (
    <div id="produk" className={`w-full py-20 relative `}>
      <h1
        id="titleCTA"
        className={`${style.headingS} text-4xl text-center mb-5 bg-clip-border overflow-hidden invertSelection`}
      >
        All Product Us
      </h1>
      <div className="mt-5 px-16">
        <ul data-aos="fade-right" className="md:flex">
          {category.map((cat, index) => (
            <li
              key={index}
              className={`
                ${index == category.length - 1 ? "mr-0" : "mr-8"}
                group
              `}
            >
              <button
                onClick={(e) => setProductTarget(e.target.innerText)}
                className="text-secondary font-semibold text-base invertSelection"
              >
                {cat}
              </button>
              <div className="bg-secondary h-1 w-0 group-hover:w-3/4 transition-all duration-200"></div>
            </li>
          ))}
        </ul>
      </div>
      {/* cards */}
      <div className="p-1 flex flex-wrap items-center justify-center">
        {Products.map((item, index) => {
          return <CardProduct item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
