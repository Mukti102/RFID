import React from "react";
import style from "../styles";

export default function Benefit1() {
  return (
    <div
      className={` relative px-3 md:px-0  w-full h-fit sl:h-screen bg-primary text-txtcolor`}
    >
      <svg
        className="absolute hidden md:block -top-[17.5rem] left-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#00a6fb"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,133.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div
        className="w-full max-w-[1300px] m-auto py-20 h-full flex flex-col-reverse sl:flex-row-reverse justify-start sl:justify-between items-center relative"
        id="About"
      >
        <div
          data-aos="fade-left"
          className="heroContent flex flex-col mb-10 md:pt-0"
        >
          <h1
            className={`homeHeading ${style.heading1} text-accent mb-[17px] max-w-[700px] invertSelection`}
          >
            <span className="text-white invertSelection"></span>PARKING GATE
            RFID
          </h1>
          <p
            className={`homeParagraph ${style.paragraph} text-accent lowercase mb-10 md:mb-14 max-w-[541px] invertSelection`}
          >
            “Pintu Gerbang Parkir RFID” adalah sistem kontrol akses parkir yang
            menggunakan teknologi RFID. Setiap kendaraan dilengkapi dengan tag
            RFID yang berisi informasi identifikasi unik. Ketika kendaraan
            mendekati pintu gerbang, pembaca RFID membaca tag tersebut. Jika tag
            diotorisasi, pintu gerbang terbuka untuk memungkinkan kendaraan
            masuk atau keluar. Sistem ini membantu mengelola akses kendaraan
            secara efisien dan meningkatkan keamanan area parkir.
          </p>
          {/* <div className="buttons">
            <a href="#kontak" className={`${style.btnChocolate} inline-block`}>
              Produk Kami
            </a>
          </div> */}
        </div>
        <div data-aos="fade-right">
          <img
            src="https://rfidnusantara.com/images/2024-03-Desain-tanpa-judul-7.png"
            alt="2 Loka Chips Products"
            className="imgHero w-full xs:max-w-[600px] sm:translate-x-10"
          />
        </div>
      </div>
    </div>
  );
}
