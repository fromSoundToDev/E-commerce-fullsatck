import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'


export default function ProductItem({id,name,image,price}) {
    const {currency} = useContext(ShopContext)
  return (
    <Link to= {`/product/:${id}`} className='cursor-pointer'>
        <div className="flex flex-col ">
            <div className="overflow-hidden">
            <img src={image[0]} alt="" className=" hover:scale-110 transition ease-in-out " />
            </div>
            <p className="font-semibold text-sm sm:text-[18px] text-black">{name}</p>
            <p className="font-semibold text-sm sm:text-[18px] text-black">{currency} {price}</p>
        </div>
    </Link>
  )
}
