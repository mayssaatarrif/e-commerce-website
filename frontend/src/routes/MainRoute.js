import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../features/Home/Home.jsx'
import Notfound from '../features/Not Found/NotFound.jsx'
import About from '../features/About/About.jsx'
import Collection from '../features/Collection/Collection.jsx'
import Product from '../features/Product/Product.jsx'
import Cart from '../features/Cart/Cart.jsx'
import PlaceOrder from '../features/PlaceOrder/PlaceOrder.jsx'
import Orders from '../features/Orders/Orders.jsx'
import Login from '../features/Login/Login.jsx'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/collection' element = {<Collection/>}/>
        <Route path='/product/:productID' element ={<Product/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/place-order' element ={<PlaceOrder/>}/>
        <Route path='/orders' element ={<Orders/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='*' element ={<Notfound/>}/>  
          </Routes>
  )
}

export default MainRoute