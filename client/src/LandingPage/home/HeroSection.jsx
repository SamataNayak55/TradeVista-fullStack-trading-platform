import React from 'react'
//import '../../styles/landing.css'
import { useNavigate } from 'react-router-dom'
//import homeHero from '../../../public/homeHero.png'

const HeroSection = () => {
  const Navigate = useNavigate();
  return (
    <div >
      <div className='flex items-center justify-center flex-col  p-4 my-4'>
        <img src='homeHero.png' alt="home hero" className='w-250 h-auto my-2 mt-8' />
        <h1 className='text-4xl font-bold my-2'>Invest in everything&#128176; !!
          
        </h1>
        <p className='text-gray-600 my-2'>Start your investment journey with us today...</p>
        <button onClick={()=> Navigate('/signup')} className='bg-blue-500 my-2 text-white px-20 py-2 rounded-full cursor-pointer'>Get Started!!!</button>
      </div>
    </div>
  )
}

export default HeroSection
