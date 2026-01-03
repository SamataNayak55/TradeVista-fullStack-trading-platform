import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OtpInput from 'react-otp-input';
const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const PhoneNumberInput = () => {
    const length = 10;
    if(phoneNumber.length > length){
      setPhoneNumber("phone number must be 10 digits only");
    }
  }
 

  return (
    <>
    
      <Navbar />
    <div className='flex justify-center items-center p-5 mt-20'>
      <h1 className='text-2xl text-center font-bold'>Open a free demat and trading account online</h1>
    </div>
<div className='flex justify-center items-center gap-8 m-5'>
  <div className='float-left'>
    <img className='p-4' src="signup.png" alt="" />
  </div>
  <div className='float-right'>
    <h2 className='text-2xl text-center px-2'> Signup now </h2>
    <p className='text-2xl text-center p-2'>Or <br /> track your existing application </p>
    <form className='flex flex-col'>
      <label htmlFor="phone">Phone Number</label>
      <input  value={phoneNumber} type='tel' onChange={(e) => setPhoneNumber(e.target.value)} className='border-2 border-gray-300 rounded-md p-2 m-2' />
      <button  className='rounded-4xl cursor-pointer bg-blue-500 text-white p-2 m-2 '>get OTP</button>
    </form>
    <OtpInput 
    value={otp}
    onChange={setOtp}
    numInputs={4}
    renderSeparator={<span> </span>}
    renderInput={(props) => <input {...props} className="m-2 p-3.5 border-2 border-gray-300 rounded-md w-12 text-center"/>}
    inputType="tel"
    />
    <button className='cursor-pointer bg-blue-500 text-white py-2 px-8 m-2 rounded-4xl'>Submit</button>
  </div>
</div>
      <Footer />
    </>
  );
}

export default SignUp;
