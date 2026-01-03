import React from 'react'
//import 'tailwindcss'
//import '../../styles/landing.css'

const Awards = () => {
  return (
      <div className="flex justify-center items-center gap-4 p-4 m-4 ">
        <div  className='float-left' >
          <img src='largestBroker.svg' alt="" />

        </div>
        <div className='float-right mx-4' >
          <h1 className=' text-4xl text-center py-6 '>largest broker</h1>
          <p>2+ years of excellence over 15% of all volumes in India daily by trading and investing in :</p>
          <div className='flex justify-center gap-4 items-center p-2'>
            <div className='float-left '>
               <ul>
            <li>
              <p>&#10036; Futures and options</p>
            </li>
             <li>
              <p>&#10036; commodity derivatives</p>
            </li>
             <li>
              <p>&#10036; currency derivatives</p>
            </li>
          </ul>
            </div>
            <div className='float-right'>
               <ul>
            <li>
              <p>&#10036; stocks & ipos</p>
            </li>
             <li>
              <p>&#10036; direct mutual funds</p>
            </li>
             <li>
              <p>&#10036; bonds and govt. securities</p>
            </li>
          </ul>
            </div>
          </div>
           <img src="pressLogos.png" alt="" />

        </div>
      </div>
    
  )
}

export default Awards
