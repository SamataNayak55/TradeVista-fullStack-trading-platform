import React from 'react';

const Hero = () => {
  return (
    <div className='mb-10'>
        <div className='mt-16 p-4 flex flex-col items-center justify-center '>
      <h1 className='text-5xl my-5 font-bold'>Trade-vista Products</h1>
      <h3 className='text-xl '>sleek, simple and secure trading platform </h3>
      </div>


      <div className='flex items-center justify-between gap-2 '>
        <div className='float-left mx-4'>
        <img className=' mx-4' src="kite.png" alt="" />
        </div>
        <div className='float-right m-2 px-2'>
            <h2 className='text-3xl my-3'>Kite</h2>
            <p className='my-4'>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
            <div className='my-3 px-4 flex'>
            <a className='border-2 rounded-4xl border-sky-400 bg-sky-400 text-white px-6 py-2 m-2 '  href="https://play.google.com/store/apps/details?id=com.zerodha.kite3"> GOOGLE PLAY STORE</a>
            <a className='border-2 rounded-4xl border-sky-400 bg-sky-400 text-white px-6 py-2 my-2' href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"> APPLE STORE</a>
            </div>
        </div>
        
        </div>

        <div className='flex items-center justify-between gap-2 '>
        
        <div className='float-left m-2 px-2'>
            <h2 className='text-3xl my-3'>Coin</h2>
            <p className='my-4'>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
            <div className='my-3 px-4 flex'>
            <a className='border-2 rounded-4xl border-sky-400 bg-sky-400 text-white px-6 py-2 m-2 '  href="https://play.google.com/store/apps/details?id=com.zerodha.kite3"> GOOGLE PLAY STORE</a>
            <a className='border-2 rounded-4xl border-sky-400 bg-sky-400 text-white px-6 py-2 my-2' href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"> APPLE STORE</a>
            </div>
        </div>
        <div className='float-right mx-4'>
        <img className=' mx-4' src="coin.png" alt="" />
        </div>
        
        </div>

        <div className='flex items-center justify-between gap-2 '>
        <div className='float-left mx-4'>
        <img className=' mx-4' src="varsity.png" alt="" />
        </div>
        <div className='float-right m-2 px-2'>
            <h2 className='text-3xl my-3'>Varsity mobile</h2>
            <p className='my-4'>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
            <div className='my-3 px-4 flex'>
            <a className='border-2 rounded-4xl border-sky-400 bg-sky-400 text-white px-6 py-2 m-2 '  href="https://play.google.com/store/apps/details?id=com.zerodha.kite3"> GOOGLE PLAY STORE</a>
            <a className='border-2 rounded-4xl border-sky-400 bg-sky-400 text-white px-6 py-2 my-2' href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"> APPLE STORE</a>
            </div>
        </div>
        
        </div>
    </div>
  );
}

export default Hero;
