import React from 'react';

const Stats = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-4 m-4">
      <div className='mx-4 float-left'>
      <h2 className='text-4xl text-center py-6'>trust with confidence    </h2>
      <h5 className='text-xl'>&#10033; customer-first always</h5>
      <p>thats why 13+ core customer trust tradevist with 3.4+ lakh cores worth of equity investments </p>
      <h5 className='text-xl'> &#10033; No spam or gimicks</h5>
      <p>no hidden charges, no gimmicks, just transparency and trust</p>
      <h5 className='text-xl' >&#10033; the tradevista universe</h5>
      <p>13+ core customer trust tradevist with 3.4+ lakh cores worth of equity investments </p>
      <h5 className='text-xl'>&#10033; do better with money</h5>
      <p>we help you make informed decisions with our research and expert advice</p>
      </div>
      <div className='mx-4 float-right'>
        <img className='w-xl h-xl' src="ecosystem.png" alt="" />
        <div className="flex justify-center items-center gap-4 p-4 m-4 text-sky-400">
          <a href=" ">&#8594; Explore our products</a>
          <a href=" ">&#8594; try kite demo</a>
        </div>
      </div>
          </div>
  );
}   

export default Stats;
