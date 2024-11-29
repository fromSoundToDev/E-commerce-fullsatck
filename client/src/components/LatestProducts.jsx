import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";

 
  
export default function LatestProducts() {
   
    const {products} = useContext(ShopContext)
    const [latestProd,setLatestProd]= useState([])

    useEffect(()=>{
        setLatestProd(products.slice(0,10))
    },[])
  return (
    
    <div className="my-10">
        <div className="">
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
            {latestProd.map((item,index)=>{
                return(
                    <ProductItem key={index} name={item.name} price={item.price} image={item.image } id={item._id}/>
                )
            })}
        </div>

    </div>
  )
}
