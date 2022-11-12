import React from "react";
import './CategorieBox.Styles.css';


const CategorieBox = ({img, title}) => {
    return (
        <div className="categorie-box"><a href="#">
            <div className="categorie-img"><img src={img}></img> </div>
            <div className="categorie-title"><span>{title}</span></div>
        </a></div>
    )
}


export default CategorieBox