import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './home/HomePage';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='justify-center items-center text-center'>
        <Navbar />
        <div className='mt-50 mb-20'>
      <h1 className='text-3xl'> NOT FOUND</h1>
      <h3 className='p-4 text-lg'> SORRY &#128542; , this page dosent exist </h3>
      <button onClick={()=>navigate('/')} className='border-2 border-sky-400 bg-sky-400 rounded-4xl px-10 font-bold text-xl text-white cursor-pointer'> home page</button>
      
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
