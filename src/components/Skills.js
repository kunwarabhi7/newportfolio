import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/javascript.png'
import reactjs from '../assets/react.png'
import FIREBASE from '../assets/firebase.png'
import TAILWIND from '../assets/tailwind.png'
import GITHUB from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4 border-blue-300'>Skills</h1>
                <p className='py-4'>These are the technology i have worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={HTML} alt='html' />
                    <p className='my-4' >HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={CSS} alt='CSS' />
                    <p className='my-4' >CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={JAVASCRIPT} alt='JAVASCRIPT' />
                    <p className='my-4' >JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={reactjs} alt='React' />
                    <p className='my-4' >React.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={FIREBASE} alt='FIREBASE' />
                    <p className='my-4' >FIREBASE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={TAILWIND} alt='TAILWIND' />
                    <p className='my-4' >TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={GITHUB} alt='GITHUB' />
                    <p className='my-4' >GITHUB</p>
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default Skills
