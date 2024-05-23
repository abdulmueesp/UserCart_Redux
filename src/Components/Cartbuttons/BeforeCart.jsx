import React from 'react'
import "./Cartbutons.css"
const BeforeCart = ({addtocart}) => {
  return (
   <div className="before-cart">
    <button className='add-cart-button' onClick={addtocart}>Add to cart</button>
   </div>
  )
}

export default BeforeCart
