import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSwords } from "react-icons/gi";


const NavBar = () => {
  const [nav,setNav] = useState(false)
  const toggleMobileNav = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-blue-100'>
      <div>
<img src={logo} alt="logo" style={{width:'200px'}}/>
      </div>
    
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>TimeLine</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    
    {/* Hamburger */}
    <div className='md:hidden z-10' onClick={toggleMobileNav}>{!nav? <GiHamburgerMenu /> : <GiCrossedSwords />} </div>
    {/* Mobile View */ }
    <ul className= {!nav ? "hidden" : 'absolute left-0 top-0 w-full h-screen bg-black flex flex-col justify-center items-center'} >
        <li className='py-6 text-5xl'>Home</li>
        <li className='py-6 text-5xl'>TimeLine</li>
        <li className='py-6 text-5xl'>Skills</li>
        <li className='py-6 text-5xl'>Project</li>
        <li className='py-6 text-5xl'>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
