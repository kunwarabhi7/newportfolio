import React from 'react'
import TypewriterEffect from './Type.jsx'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600 text-4xl pb-4'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-9xl font-bold text-blue-100'>
          Abhishek Singh
        </h1>
        <p className='text-red-400 text-4xl  p-4'>and, I am</p>
        <h2 className='text-7xl sm:text-7xl font-bold text-[#c4b84e]'>
        <TypewriterEffect  />
        </h2>
     
    </div>
    </div>
  )
}

export default Home
