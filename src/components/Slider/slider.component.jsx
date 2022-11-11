import React from "react";
import './slider.styles.css';


const Slider = () =>{
    return (
        <div className="slider-img">
            <div className="container-flex">
                <div className="slider-text">
                    <div className="slide-logo"><img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" /></div>
                    <div className="slide-text"><h2> Dakikalar içinde kapınızda </h2></div>
                </div>


                <div className="slider-form">

                <div className="form-content">
                    <p>Giriş Yap veya Kayıt Ol</p>
                    <form action="">
                    <select name="" id="">
                        <option value="0">+90</option>

                        </select>

                        <input type="text" className="form-input" placeholder="Telefon Numarası" />
                        <button className="form-btn">Telefon numarası ile devam et</button>

                    </form>

                </div>

                </div>
            </div>
        </div>


        
    )

    
}


export default Slider