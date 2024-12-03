import React from "react";
import './Explore.css'
import ProductCard from "../../Components/ProductCard/ProductCard";
function Explore()
{
   const furnitureProducts = [
     {
       id: 1,
       title: "Elegant Sofa",
       img: "https://picsum.photos/seed/sofa1/300/200",
     },
     {
       id: 2,
       title: "Modern Chair",
       img: "https://picsum.photos/seed/chair1/300/200",
     },
     {
       id: 3,
       title: "Luxury Bed",
       img: "https://picsum.photos/seed/bed1/300/200",
     },
     {
       id: 4,
       title: "Dining Table",
       img: "https://picsum.photos/seed/table1/300/200",
     },
     {
       id: 5,
       title: "Office Desk",
       img: "https://picsum.photos/seed/desk1/300/200",
     },
     {
       id: 6,
       title: "Classic Wardrobe",
       img: "https://picsum.photos/seed/wardrobe1/300/200",
     },
     {
       id: 7,
       title: "TV Stand",
       img: "https://picsum.photos/seed/tvstand1/300/200",
     },
     {
       id: 8,
       title: "Bookshelf",
       img: "https://picsum.photos/seed/bookshelf1/300/200",
     },
     {
       id: 9,
       title: "Recliner",
       img: "https://picsum.photos/seed/recliner1/300/200",
     },
     {
       id: 10,
       title: "Coffee Table",
       img: "https://picsum.photos/seed/coffeetable1/300/200",
     },
     // Add up to 30 items similarly...
   ];


    return(
        <div className="explore">
          {furnitureProducts.map((pro)=>(
            <ProductCard img={pro.img} title={pro.title}/>
          ))}
        </div>
    )
}
export default Explore