import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import data from './data';

function ProductDetail() {
  const {productId} = useParams();
  const navigate = useNavigate();
console.log(navigate)
  //loop over products and display item that matches the prop
  const thisProduct = data.find(item => {
    return  item.id === Number(productId)
  })

  return (
    <div>
      <h1>Product Details</h1>
      <h3>{thisProduct.name} - {thisProduct.price}</h3>
      <p>{thisProduct.description}</p>
      <button onClick={() => navigate(-1)}>See all Products</button>
    </div>
  )
}

export default ProductDetail