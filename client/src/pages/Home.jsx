import React from 'react'
import Hero from '../components/Hero'
import LatestProducts from '../components/LatestProducts'
import Title from '../components/Title'
import Bestseller from '../components/Bestseller'

export default function Home() {
  return (
    <div>
      <Hero/>
      <LatestProducts/>
      <Bestseller/>
    </div>
  )
}
