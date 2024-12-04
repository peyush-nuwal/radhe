import React, { useState,useEffect } from 'react'
import './ProductCard.css';
import { RxCross1 } from "react-icons/rx";
const ProductCard = ({img,title}) => {
  const [showDetailed, setShowDetailed] = useState(false)

   useEffect(() => {
     if (showDetailed) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = "auto";
     }

     return () => {
       document.body.style.overflow = "auto";
     };
   }, [showDetailed]);

  return (
    <div className="product-card" onClick={() => setShowDetailed(true)}>
      <div className="product-card-img-container">
        <img src={img} alt="" className="product-card-img" />
      </div>
      <h5 className="product-card-title">{title}</h5>
      <DetailedCard
        img={img}
        
        open={showDetailed}
        setOpen={setShowDetailed}
      />
    </div>
  );
}

export default ProductCard


const DetailedCard = ({ img, open,setOpen }) => {

  const handleClick=(e)=>{
     e.stopPropagation()
  }
  return (
    open && (
      <div className="detailed-card" onClick={handleClick}>
        <img src={img} alt="" className="detailed-card-img" />
        <RxCross1
          className="detailed-card-close-btn"
          onClick={() => setOpen(false)}
        />
      </div>
    )
  );
};