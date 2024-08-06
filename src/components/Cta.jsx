import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import style from "../styles";
import { getWaApi } from "../constants";

const CTA = () => {
  useEffect(() => {
    const title = new SplitType("#titleCTA");
    gsap.to(title.chars, {
      duration: 0.1,
      stagger: 0.05,
      y: -5,
      scrollTrigger: {
        trigger: "#titleCTA .char",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div
      className={`${style.paddingX} w-full flex flex-col justify-center items-center bg-primary py-16 my-0`}
    >
      <h1
        id="titleCTA"
        className={`${style.headingS} sm:text-4xl text-2xl text-center mb-5 bg-clip-border overflow-hidden invertSelection text-white`}
      >
        PENYEDIA HARDWARE DAN INSTALASINYA UNTUK KEBUTUHAN SISTEM ANDA
      </h1>
      <p
        className={`${style.paragraph} text-gray-100 max-w-sm sm:max-w-2xl text-center mb-12 invertSelection`}
      >
        Kami menyediakan kebutuhan perangkat sistem otomatisasi, perangkat
        pendukung, serta kebutuhan lainnya pada bidang digitalisasi dan
        teknologi pada umumnya
      </p>
      <a href={getWaApi()} target="blank" className={`${style.btnChocolate}`}>
        Klik Disini
      </a>
    </div>
  );
};

export default CTA;
