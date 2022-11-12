import React from "react";
import './InfoBox.Styles.css';


const InfoBox = ({img,title,descp}) => {
    return(
        <div className="info-box">
            <div className="info-img"><img src={img}></img> </div>
            <div className="info-text">
                <h2>{title}</h2>
                <p> {descp} </p>
            </div>
        </div>
    )
}

export default InfoBox