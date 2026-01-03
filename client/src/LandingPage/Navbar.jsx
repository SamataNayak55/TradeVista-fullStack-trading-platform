import React from 'react';
import SignUp from './signup/SignUp';
import HomePage from './home/HomePage';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <div className='fixed bg-white w-full flex justify-between items-center p-4  border-0 border-gray-400 shadow-md top-0 '>
        <div className='float-left mx-3'>  
           <img onClick={()=> Navigate('/')} src="logo.svg" alt="" className='h-10 w-10 cursor-pointer'/>
</div>
<div className='float-right px-3 flex gap-4 '>
  <button  onClick={() => Navigate('/signup')} className='cursor-pointer'>Sign up</button>
  <button onClick={()=> Navigate('/about')} className='cursor-pointer'>About</button>
  <button onClick={()=>Navigate('/products')} className='cursor-pointer'>Products</button>
  <button onClick={()=> Navigate('/pricing')} className='cursor-pointer'>pricing</button>
  <button className='cursor-pointer'>&#9776;</button>
</div>
      </div>
    </div>
  );
}

export default Navbar;
