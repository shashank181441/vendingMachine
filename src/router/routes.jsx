import React from 'react'
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

function Routesy() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routesy