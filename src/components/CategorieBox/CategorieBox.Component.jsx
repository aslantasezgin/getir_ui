import React from "react";
import './CategorieBox.Styles.css';


const CategorieBox = ({img, title, key}) => {
    return (
        <div className="categorie-box" key={key}><a href="#">
            <div className="categorie-img"><img src={img}></img> </div>
            <div className="categorie-title"><span>{title}</span></div>
        </a></div>
    )
}


export default CategorieBox