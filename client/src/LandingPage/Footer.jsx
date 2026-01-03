import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 border-0 inset-shadow-sm border-gray-400'>
      <div >
        <img src="logo.svg" alt="" className='h-30 w-30'/>
        <p>© 2024 Trading App. All rights reserved.</p>
      </div>
      <div className='flex space-x-4'>
        <a href="https://www.instagram.com/samata.nayak22/" alt="Instagram" className='text-sky-400'>&#129653;instagram</a>
        <a href="https://x.com/Samata_Nayak55" className='text-sky-400'>&#129653;twitter </a>
        <a href="https://www.linkedin.com/in/samata-nayak/" className='text-sky-400'>&#129653;linkedin</a>
      </div>
      </div>
    </div>
  );
}

export default Footer;
