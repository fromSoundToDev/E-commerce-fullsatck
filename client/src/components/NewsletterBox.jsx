import React from 'react'

export default function NewsletterBox() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>
        <p className=" text-xs sm:text-base md:text-3xl font-semibold ">Subscribe now & get 20% off</p>
        <p className="text-xs sm:text-base md:text-lg text-[#9A9A9A]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form className='border-[1px] border-[#C7C7C7] flex flex-row gap-3 w-full sm:w-1/2 items-center my-6 pl-3'  >
            <input type="email" placeholder='enter a valid email' className='w-full sm:flex-1 outline-none ' />
            <button className='bg-black text-white text-xs px-10 py-4 hover:opacity-85  '>SUSCRIBE</button>
        </form>
    </div>
  )
}
