import React from 'react'
import HomePage from './LandingPage/home/HomePage'
import SignUp from './LandingPage/signup/SignUp'
import About from './LandingPage/about/About'
import Pricing from '../src/LandingPage/pricing/PricingPage'
import Products from './LandingPage/products/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import NotFound from './LandingPage/NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
 