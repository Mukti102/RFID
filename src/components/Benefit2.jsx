import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import style from "../styles";
// import { testimonials } from "../constants";
import { useEffect } from "react";
import Aos from "aos";

const Benefit2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1700, min: 1060 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1060, min: 930 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 930, min: 620 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className={`w-full md:py-20 py-0  relative ${style.paddingX}`}
      id="About"
    >
      <div className="w-full max-w-[1300px] m-auto py-20 h-full flex flex-col-reverse sl:flex-row-reverse justify-start sl:justify-between items-center relative">
        <div data-aos="fade-left">
          <img
            src="https://rfidnusantara.com/images/2024-03-Desain-tanpa-judul-8.png"
            alt="2 Loka Chips Products"
            className="imgHero  w-full  xs:max-w-[600px] sm:translate-x-10"
          />
        </div>
        <div
          data-aos="fade-right"
          className="heroContent flex flex-col mb-10 md:pt-0"
        >
          {/* <h3 className={`homeHeading ${style.heading2} invertSelection`}>
            Jelajahi Rasanya!
          </h3> */}
          <h1
            className={`homeHeading ${style.heading1} mb-[17px] max-w-[700px] invertSelection`}
          >
            <span className="text-white invertSelection"></span>TOLLGATE RFID
          </h1>
          <p
            className={`homeParagraph ${style.paragraph} lowercase mb-0 md:mb-14 max-w-[541px] invertSelection`}
          >
            “Tollgate RFID adalah sistem pembayaran tol otomatis yang
            menggunakan teknologi RFID. Setiap kendaraan dilengkapi dengan tag
            RFID yang terdeteksi saat melintasi gerbang tol. Biaya tol secara
            otomatis dipotong dari akun prabayar atau rekening yang terhubung
            dengan tag RFID tersebut. Sistem ini membantu mengurangi waktu
            tunggu di gerbang tol dan meningkatkan efisiensi pengumpulan tol..
          </p>
          {/* <div className="buttons">
            <a href="#kontak" className={`${style.btnChocolate} inline-block`}>
              Produk Kami
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Benefit2;
