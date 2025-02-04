import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../features/Home/Home.jsx'
import Notfound from '../features/Not Found/NotFound.jsx'
import About from '../features/About/About.jsx'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='*' element ={<Notfound/>}/>  
          </Routes>
  )
}

export default MainRoute