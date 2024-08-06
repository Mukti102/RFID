import React from "react";
import style from "../styles";
export default function About() {
  return (
    <div className={`${style.paddingX}  mt-10 w-full mb-20`} id="service">
      <div className="max-w-[1300px] m-auto flex flex-col items-center">
        <h1 className={`${style.heading2} my-10 sm:my-16`}>Tentang Kami</h1>
        <div className="flex flex-col gap-10 sl:flex-row items-center justify-between">
          {/* description */}
          <div data-aos="fade-right">
            <div className="heroContent flex  flex-col mb-10 md:pt-0">
              <h1
                className={`homeHeading ${style.heading2} text-secondary mb-[17px] max-w-[700px] invertSelection`}
              >
                <span className="text-white invertSelection"></span>Sejarah
              </h1>
              <p
                className={`homeParagraph ${style.paragraph} text-secondary lowercase mb-10 md:mb-14 max-w-[541px] invertSelection`}
              >
                RFID Nusantara didirikan pada tahun 2023 dengan tujuan
                menyediakan solusi teknologi informasi dan keamanan yang
                inovatif untuk berbagai industri. Sejak awal berdiri, kami telah
                fokus pada penjualan dan layanan produk-produk berkualitas
                tinggi yang dapat memenuhi kebutuhan spesifik pelanggan kami.
              </p>
            </div>
            {/* visi misi */}
            <div className="heroContent flex  flex-col mb-10 md:pt-0">
              <h1
                className={`homeHeading ${style.heading2} text-secondary mb-[17px] max-w-[700px] invertSelection`}
              >
                <span className="text-white invertSelection"></span>Visi
              </h1>
              <p
                className={`homeParagraph ${style.paragraph} text-secondary lowercase mb-10 md:mb-14 max-w-[541px] invertSelection`}
              >
                Menjadi pemimpin pasar dalam solusi teknologi informasi dan
                keamanan di Indonesia, dengan fokus pada inovasi dan kepuasan
                pelanggan
              </p>
              <h1
                className={`homeHeading ${style.heading2} text-secondary mb-[17px] max-w-[700px] invertSelection`}
              >
                <span className="text-white invertSelection"></span>Misi
              </h1>
              <article className="prose">
                <ol
                  className={`homeParagraph ${style.paragraph} text-secondary lowercase mb-10 md:mb-14 max-w-[541px] invertSelection`}
                >
                  <li>
                    Menyediakan produk dan layanan berkualitas tinggi yang
                    memenuhi kebutuhan pelanggan.
                  </li>
                  <li>
                    Membangun hubungan jangka panjang dengan pelanggan melalui
                    layanan yang andal dan profesional.
                  </li>
                  <li>
                    Mendorong inovasi dan pengembangan teknologi untuk
                    meningkatkan efisiensi dan keamanan.
                  </li>
                </ol>
              </article>
            </div>
          </div>
          {/* image */}
          <div data-aos="fade-left" className="w-96  overflow-hidden">
            <img
              src="https://rfidnusantara.com/images/2024-03-1-7.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
