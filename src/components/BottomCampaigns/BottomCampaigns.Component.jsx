import React from "react";
import './BottomCampaigns.Styles.css'


const AppIcon = [
    {
        id:0,
        icon:'https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg',
    
    },
    {
        id:1,
        icon:'https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg',

    },
    {
        id:2,
        icon:'https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg',
       
    },

]

const BottomCampaigns = () => {
    return (
        <div className="bottom-campaigns">
            <div className="campaign-left">
                <h2>Getir'i indirin!</h2>
                <p>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>

                <ul>
                    {AppIcon.map((item) => {
                        return <li className="camp-li"><a href="#">
                        <img src={item.icon} alt="" />                        
                    </a></li>
                    })}

                
                </ul>
            </div>
            <div className="campaign-right">
                <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
            </div>
        </div>
    )
}

export default BottomCampaigns