import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Featured.css'
const Featured = () => {

     const cards=[
         {id:1,img:"./assets/imgs/pro-1.jpg",title:'Shoe cabin'},
         {id:2,img:"./assets/imgs/pro-2.jpg",title:'Recliner Sofa'},
         {id:3,img:"./assets/imgs/pro-3.jpg",title:'Dinning table'},
         {id:4,img:"./assets/imgs/pro-4.jpg",title:'Modern Tea table'},
          {id:5,img:"./assets/imgs/pro-1.jpg",title:'Shoe cabin'},
         {id:6,img:"./assets/imgs/pro-2.jpg",title:'Recliner Sofa'},
         {id:7,img:"./assets/imgs/pro-3.jpg",title:'Dinning table'},
         {id:8,img:"./assets/imgs/pro-4.jpg",title:'Modern Tea table'},
     ]




  return (
    <div className="featured">
      <h1 className="featured-h1">Featured Products</h1>

      <div className="featured-product-container">
           {cards.map((card)=>(

               <ProductCard  key={card.id} img={card.img} title={card.title}/>
           ))}
        
      </div>
    </div>
  );
}

export default Featured