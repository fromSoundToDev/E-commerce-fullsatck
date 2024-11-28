import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Order from './pages/Order';
import PlaceOrders from './pages/PlaceOrders';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Collection from './pages/Collection';
import Card from './pages/card';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

export default function App() {
  return (
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/>
      <Hero/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='product/:id' element={<Product/>}/>
       <Route path='order' element={<Order/>}/>
       <Route path='place-order' element={<PlaceOrders/>}/>
       <Route path='card' element={<Card/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/collection' element={<Collection/>}/>
      </Routes>
    </div>
  )
}
