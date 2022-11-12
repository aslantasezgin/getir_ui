import React from "react";
import './Campaigns.Styles.css'
import TopCampaigns from "../TopCampaigns/TopCampaigns.Component";
import BottomCampaigns from "../BottomCampaigns/BottomCampaigns.Component";

const topCampaigns = [
    {
    id:1,
    img:'https://cdn.getir.com/misc/63691598323904039b963eb6_banner_tr_1667831243398.jpeg'
    },
    {
    id:2,
    img:'https://cdn.getir.com/misc/63638090a30a546d9e52ae38_banner_tr_1667906980055.jpeg'
    },
    {
    id:3,
    img:'https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png'
    },
]

const Campaigns = () =>{
    return(
        <div className="campaigns">
        <div className="container-flex">
        <div className="campaigns-title"><h2>Kampanyalar</h2></div>
        
            {topCampaigns.map((item) => <TopCampaigns key={item.id} img={item.img}></TopCampaigns>)}
            <BottomCampaigns></BottomCampaigns>


        </div>
        </div>
    )
}


export default Campaigns