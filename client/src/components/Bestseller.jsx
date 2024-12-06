import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'



export default function Bestseller() {
    
    const {products} = useContext(ShopContext)
    const [bestseller, setBestseller] = useState([])

    useEffect(()=>{
        const bestProducts = products.filter(item=>item.bestseller);
        setBestseller(bestProducts.slice(0,5))
    } ,[])
  return (
    <div className='my-10'>
        <div className=" text-3xl text-center p-8">
            <Title text1={'BEST'} text2={'SELLER'} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
            {
                bestseller.map((item,index)=>{
                   return <ProductItem key={index} name={item.name} price={item.price} image={item.image } id={item._id} />
                })
            }
        </div>
    </div>
  ) 
}
