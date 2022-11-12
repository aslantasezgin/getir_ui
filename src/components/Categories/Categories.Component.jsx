import React from "react";
import './Categories.Styles.css';
import CategorieBox from "../CategorieBox/CategorieBox.Component";


const categories = [
    {
    id:1,
    img:'https://market-product-images-cdn.getirapi.com/category/e8b802e6-7987-486f-bf53-a9720c698a98.jpg',
    title:'Yeni Ürünler'
    },
    {
    id:2,
    img:'https://market-product-images-cdn.getirapi.com/category/f66f92ea-f680-4dd4-808b-8f8a71709a86.jpeg',
    title:'Su & İçecek'
    },
    {
    id:3,
    img:'https://market-product-images-cdn.getirapi.com/category/d43a0396-b588-4666-ac43-af4b3159fee2.jpeg',
    title:'Meyve & Sebze'
    },
    {
    id:4,
    img:'https://market-product-images-cdn.getirapi.com/category/6814548a-24f2-4ba2-9762-7ca3e96a3d40.jpeg',
    title:'Fırından'
    },
    {
    id:5,
    img:'https://market-product-images-cdn.getirapi.com/category/4c2530e6-d2d2-4a77-96a0-917f16165f57.jpeg',
    title:'Temel Gıda'
    },
    {
    id:6,
    img:'https://market-product-images-cdn.getirapi.com/category/8393d053-6478-410a-a234-d1a914185b35.jpeg',
    title:'Atıştırmalık'
    },
    {
    id:7,
    img:'https://market-product-images-cdn.getirapi.com/category/0f329100-f339-4503-bf56-095ab4c11c98.jpeg',
    title:'Dondurma'
    },
    {
    id:8,
    img:'https://market-product-images-cdn.getirapi.com/category/afee33f9-93fe-4b87-8094-6e5c7f13c064.jpeg',
    title:'Süt Ürünleri'
    },
    {
    id:9,
    img:'https://market-product-images-cdn.getirapi.com/category/35640646-a603-4b9a-96db-96918025fb61.jpeg',
    title:'Kahvaltılık'
    },
    {
    id:10,
    img:'https://market-product-images-cdn.getirapi.com/category/b01619f2-e12e-4777-85a2-5727abb62d51.jpeg',
    title:'Yiyecek'
    },
    {
    id:11,
    img:'https://market-product-images-cdn.getirapi.com/category/c594be17-998d-475e-91a5-89924798a27d.jpeg',
    title:'Fit & Form'
    },
    {
    id:12,
    img:'https://market-product-images-cdn.getirapi.com/category/d7b76064-6334-43a4-aafe-ace887ec2da6.jpeg',
    title:'Kişisel Bakım'
    },
    {
    id:13,
    img:'https://market-product-images-cdn.getirapi.com/category/29bcb34e-ae77-46f8-b27c-d36e50275709.jpeg',
    title:'Ev Bakım'
    },
    {
    id:14,
    img:'https://market-product-images-cdn.getirapi.com/category/d737c0bd-538c-486c-9485-46aff62856d1.jpeg',
    title:'Ev & Yaşam'
    },
    {
    id:15,
    img:'https://market-product-images-cdn.getirapi.com/category/d6e1fc47-6dbe-4be0-9e21-8b3a3f9cfecd.jpeg',
    title:'Teknoloji'
    },
    {
    id:16,
    img:'https://market-product-images-cdn.getirapi.com/category/907cbf21-00b7-4f94-b257-9fd8b104cf02.jpeg',
    title:'Evcil Hayvan'
    },
    {
    id:17,
    img:'https://market-product-images-cdn.getirapi.com/category/517efd09-95b6-466a-980e-55db579ebddc.jpeg',
    title:'Bebek'
    },
    {
    id:18,
    img:'https://market-product-images-cdn.getirapi.com/category/34e1cf54-bf96-498b-ba55-680b960cfcfc.jpeg',
    title:'Cinsel Sağlık'
    },

]

const Categories = () => {
    return (
    <div className="categories">
    <div className="container-flex">
        <div className="categories-title"><h2>Kategoriler</h2></div>

        <div className="categories-boxes">
            {categories.map((item) => <CategorieBox key={item.id} img={item.img} title={item.title} ></CategorieBox> )}
        
        </div>

    </div>




    </div>)
}

export default Categories