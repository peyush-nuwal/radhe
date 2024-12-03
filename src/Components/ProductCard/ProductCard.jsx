import React from 'react'
import './ProductCard.css'
const ProductCard = ({img,title}) => {
  return (
    <div className="product-card">
      <div className="product-card-img-container">
        <img src={img} alt="" className="product-card-img" />
      </div>
      <h5 className='product-card-title'>{title}</h5>
    </div>
  );
}

export default ProductCard