import React from 'react'

const Education = () => {
  return (
    <div className='flex justify-center items-center gap-8 p-4 m-4'>
      <div className='mx-4 float-left '>
        <img src="education.svg" alt="" />
      </div>
      <div className='mx-4 float-right '>
        <h1 className='text-center text-4xl my-4 py-4'>Education for free and open market </h1>
        <p>Empowering traders with knowledge through our comprehensive educational resources</p>
        <div className='text-center text-sky-400' >
          <a href=" ">&#10033; varsity</a>
        </div>
        <p  >trading Q&A, the more active tradin aand investment community in india for all your market related queires</p>
        <div className='text-center text-sky-400'>
          <a  href=" ">&#10033; trading Q&A</a>
        </div>
      </div>
    </div>
  )
}

export default Education
