import React from "react";
import './Info.Styles.css'
import InfoBox from "../InfoBox/InfoBox.Component";

const info = [
    {
        id:1,
        img:'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
        title:'Her siparişinize bir kampanya',
        descp:'Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.'
    },
    {
        id:2,
        img:'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
        title:'Dakikalar içinde kapınızda',
        descp:'Getir’le siparişiniz dakikalar içinde kapınıza gelir.'
    },
    {
        id:3,
        img:'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
        title:'Binlerce çeşit mutluluk',
        descp:'Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.'
    },
]


const Info = () => {
    return(
        <div className="info">
            <div className="container-flex">

            {info.map((item) => <InfoBox img={item.img} title={item.title} descp={item.descp} key={item.key}></InfoBox> )}

            </div>
        </div>
    )
}

export default Info