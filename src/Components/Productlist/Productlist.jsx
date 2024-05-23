import React, { useState } from 'react'
import products from "../../api/products.json"
import "../Productlist/Productlist.css"
import AfterCart from '../Cartbuttons/AfterCart'
import BeforeCart from '../Cartbuttons/BeforeCart'
import { useSelector } from 'react-redux'


const Productlist = () => {
  
  const {cartCount}=useSelector((state)=>state.cart)
  console.log(`use selcetor redux ${cartCount}`);

  
  const [count,setCount]=useState(0);
  const addtocart=()=>{
     setCount(1);
  }
    
  return (
   <section className='container'>
     {products?.map((data)=>(
      <div className="product-container" key={data.id}>
        <img src={data?.image} alt=""  />
        <h3>{data?.title}</h3>
        {count>0 ?<AfterCart />:<BeforeCart  addtocart={addtocart} />}
        
        
      </div>

     ))}
   </section>
  )
}

export default Productlist
