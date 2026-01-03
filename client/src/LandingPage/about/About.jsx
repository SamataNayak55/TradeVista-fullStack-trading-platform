import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='p-4 flex flex-col items-center justify-center mt-20  '>
        <h1 className='text-2xl text-center '>We poineered the discount broking model in india.</h1>
        <h1 className='text-2xl text-center '>now, we are breaking ground with our technology. </h1>
      </div>
      <div className=' flex flex-col items-center justify-center '>
        <h2 className='text-2xl font-bold text-sky-400 text-center my-5'>Samata Nayak</h2>
        <img src="me.jpeg" alt="" className='w-100 h-auto'/>
        <p className='text-center m-2'>Founder & CEO</p>
        <p className='text-center m-2 mb-4'>Samata Nayak is the founder and CEO of our company, leading the team with a vision to revolutionize the financial services industry through innovative technology and customer-centric solutions.</p>
      </div>
      <Footer />
    </>
  );
}

export default About;
