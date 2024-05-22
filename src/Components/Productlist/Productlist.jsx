import React from 'react'
import products from "../../api/products.json"
import "../Productlist/Productlist.css"
import AfterCart from '../Cartbuttons/AfterCart'
import BeforeCart from '../Cartbuttons/BeforeCart'
const Productlist = () => {
  return (
   <section className='container'>
     {products?.map((data)=>(
      <div className="product-container" key={data.id}>
        <img src={data?.image} alt=""  />
        <h3>{data?.title}</h3>
        <BeforeCart />
        <AfterCart />
      </div>

     ))}
   </section>
  )
}

export default Productlist
