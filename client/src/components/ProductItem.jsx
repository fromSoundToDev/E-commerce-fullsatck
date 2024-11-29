import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


export default function ProductItem({id,name,image,price}) {
    const {currency} = useContext(ShopContext)
  return (
    <div className=''>
        <div className="flex flex-col overflow-hidden">
            <img src={image[0]} alt="" className="" />
            <p className="font-semibold text-sm sm:text-[18px] text-black">{name}</p>
            <p className="font-semibold text-sm sm:text-[18px] text-black">{currency} {price}</p>
        </div>
    </div>
  )
}
