import React from 'react'
import "./Cartbutons.css"
import { useDispatch } from 'react-redux'
import { addtocart } from '../../Redux/Cart'


const BeforeCart = () => {

  const dispatch=useDispatch();

  return (

   <div className="before-cart">
    <button className='add-cart-button' onClick={()=>dispatch(addtocart())} >
      Add to cart
      </button>
   </div>
   
  )
}



export default BeforeCart
