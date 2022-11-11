import React from "react";
import './header.styles.css';



const Header = () => {
    return(
        <header>
            <div className="container-flex">
            <div className="nav-list">
                <ul>
                    <li><a href="#">getir</a></li>
                    <li><a href="#">getiryemek</a></li>
                    <li><a href="#">getirbüyük</a></li>
                    <li><a href="#">getirsu</a></li>

                </ul>
            </div>
            <div className="nav-user">
                <ul>
                    <li><span><i className="fa-solid fa-globe"></i></span><a href="#">Türkçe(TR)</a></li>
                    <li><span><i className="fa-solid fa-user"></i></span><a href="#">Giriş Yap</a></li>
                    <li><span><i className="fa-solid fa-user-plus"></i></span><a href="#">Kayıt Ol</a></li>

                </ul>
            </div>
            </div>
        </header>
    )
}


export default Header