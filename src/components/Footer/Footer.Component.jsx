import React from "react";
import './Footer.Styles.css';


const Footer = () => {
    return (
        <footer>
            <div className="container-flex">
        <div className="foot-list">
            <h2 className="foot-title">Getir'i İndirin!</h2>
            <ul>
            <li><a href="#"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img> </a> </li> 
            <li><a href="#"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img> </a> </li> 
            <li><a href="#"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img> </a> </li> 

            
            </ul>
        </div>

        <div className="foot-list">
            <h2 className="foot-title">Getir'i Keşfedin</h2>
            <ul>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Kariyer</a></li>
                <li><a href="#">Teknoloji Kariyerleri</a></li>
                <li><a href="#">İletişim</a></li>
                <li><a href="#">Sosyal Sorumluluk Projeleri</a></li>

            </ul>
        </div>

        <div className="foot-list">
            <h2 className="foot-title">Yardıma mı ihtiyacınız var?</h2>
            <ul>
                <li><a href="#">Sıkça Sorulan Sorular</a></li>
                <li><a href="#">Kişisel Verilerin Korunması</a></li>
                <li><a href="#">Gizlilik Politikası</a></li>
                <li><a href="#">Kullanım Koşulları</a></li>
                <li><a href="#">Çerez Politikası</a></li>

            </ul>
        </div>


        <div className="foot-list">
            <h2 className="foot-title">İş Ortağımız Olun</h2>
            <ul>
                <li><a href="#">Bayimiz Olun</a></li>
                <li><a href="#">Deponuzu Kiralayın</a></li>
                <li><a href="#">GetirYemek Restoranı Olun</a></li>
                <li><a href="#">GetirÇarşı İşletmesi Olun</a></li>
                <li><a href="#">Zincir Restoranlar</a></li>

            </ul>
        </div>


        <div className="qr-code">
            <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" />
        </div>


            </div>

            <div className="footer-bottom"></div>
        </footer>
        
    )
}

export default Footer