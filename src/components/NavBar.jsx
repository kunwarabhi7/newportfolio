import React from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-blue-300'>
      <div>
<img src={logo} alt="logo" style={{width:'200px'}}/>
      </div>
    <div>
      <ul className='flex'>
        <li>Home</li>
        <li>TimeLine</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
    {/* Hamburger */}
    <div className='hidden'><GiHamburgerMenu /></div>
    {/* Mobile View */ }
    <ul className='hidden'>
        <li>Home</li>
        <li>TimeLine</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
