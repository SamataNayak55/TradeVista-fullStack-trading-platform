import React from 'react';

const Pricing = () => {
  return (
    <div>
    <div className='flex justify-center items-center gap-4  my-5'>
      <div className='my-4'>
        <h1 className='text-center text-4xl py-4'>Unbeatable pricing</h1>
        <p>Transparent and competitive pricing for all your trading needs</p>
        <div className='text-center text-sky-400'>
          <a href=" ">&#10033; see pricing</a>
        </div>
      </div>
      
    </div>
    <div className='flex justify-center items-center gap-4 m-5'>
      <div className='float-left border-2 border-solid border-gray-300 p-4 '>
        <h1 className='text-center text-4xl'>&#8377; 0</h1>
        <p>Free access to all trading tools and resources</p>
      </div>
      <div className='float-right border-2 border-solid border-gray-300 p-4 '>
        <h1 className='text-center text-4xl'>&#8377; 20 </h1>
        <p >Flat fee per executed order for equity delivery trades</p>
      </div>
    </div>
    </div>
  );
}

export default Pricing;
