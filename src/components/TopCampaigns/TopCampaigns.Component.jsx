import React from "react";
import './TopCampaigns.Styles.css';


const TopCampaigns = ({img}) => {
    return (
        <div className="top-campaigns">
        <a href="#"> <img src={img} alt="" />  </a>
        </div>
    )
}


export default TopCampaigns