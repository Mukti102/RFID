import {
    service1, service2, service3
} from "../assets";

import { rfid26,rfid9 } from "../assets";


export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "/"
    },
    {
        id: "produk",
        title: "Produk",
        link: "/#produk"
    },
    {
        id: "Layanan",
        title: "Layanan",
        link: "/#service"
    },
    {
        id: "Tentang",
        title: "Tentang Kami",
        link: "/about"
    },
    {
        id: "kontak",
        title: "Kontak",
        link: "/#kontak"
    },
];




export const produks = [
    {
        id: "1",
        title: "RFID READER",
        tagline: "RFID READER 7306 LONG UHF",
        img: rfid26,
        detail: {
                desc1:
                "",
                img: rfid26
            }
    },
    {
        id: "2",
        title: "RFID READER",
        tagline: "CHAFON pembaca kartu rfid 4 port, untuk sistem kontrol akses pembaca rfid uhf",
        img: rfid9,
        detail: {
                desc1:
                "",
                img: rfid9
            }
    },

];

export const enjoy = [
    {
        id: "serivce1",
        img: service1,
        title: "Penjualan dan penyedia barang",
        content:
            "Menyediakan berbagai macam barang berkualitas tinggi sesuai kebutuhan Anda. Kami menjamin ketersediaan stok dan harga yang kompetitif untuk mendukung bisnis Anda."
    },
    {
        id: "service2",
        img: service2,
        title: "Instalasi Security System",
        content:
            "Layanan instalasi sistem keamanan yang mencakup CCTV, alarm, dan akses kontrol. Kami memastikan perlindungan maksimal untuk properti Anda dengan teknologi terbaru dan tenaga ahli yang berpengalaman."
    },
    {
        id: "service3",
        img: service3,
        title: "Dukungan Teknis",
        content:
            "Menyediakan dukungan teknis profesional untuk memastikan operasional sistem Anda berjalan lancar. Tim kami siap membantu dengan troubleshooting, perbaikan, dan pemeliharaan perangkat Anda.."
    },
];



export const infos = [
    {
        id: "email",
        content: "Sales@rfidnusantara.com",
        link: "",
    },
    {
        id: "website",
        content: "rfidnusantara.com",
        link: "https://rfidnusantara.com/"
    },
    {
        id: "instagram",
        content: "RFID",
        link: "https://www.instagram.com/rfidnusantara?igsh=MTZzYXpnNWJpMTFxag%3D%3D"
    },
    {
        id: "whatsapp",
        content: "+62 82351958788",
        link: "https://api.whatsapp.com/send/?phone=%2B6282351958788&text="
    },
];

const waApi = infos[infos.length - 1].link



export const getWaApi = (message) => {
    if(message){
        return waApi + message
    }else{
        let question = 'Halo Kak Saya ingin Bertanya tentang ';
        return waApi + question;
    }
}