import React, { useState } from 'react'
import products from "../../api/products.json"
import "../Productlist/Productlist.css"
import AfterCart from '../Cartbuttons/AfterCart'
import BeforeCart from '../Cartbuttons/BeforeCart'
import { useSelector } from 'react-redux'


const Productlist = () => {
  
  const {cartCount}=useSelector((state)=>state.cart)
  

  return (
   <section className='container'>
     {products?.map((data)=>(
      <div className="product-container" key={data.id}>
        <img src={data?.image} alt=""  />
        <h3>{data?.title}</h3>
        {cartCount>0 ?<AfterCart />:<BeforeCart />}
        
        
      </div>

     ))}
   </section>
  )
}

export default Productlist
