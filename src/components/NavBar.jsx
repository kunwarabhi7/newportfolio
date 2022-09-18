import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSwords } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsGithub , BsFileEarmarkPersonFill } from "react-icons/bs";
import { Link } from 'react-scroll';



const NavBar = () => {
  const [nav,setNav] = useState(false)
  const toggleMobileNav = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-blue-100'>
      <div>
<img src={logo} alt="logo" className='cursor-pointer' style={{width:'200px'}}/>
      </div>
    
      <ul className='hidden md:flex'>
        <li>  <Link to="home" smooth={true} duration={500} >
          Home
        </Link></li>
        <li> <Link to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
        <li><Link to="experience" smooth={true} duration={500} >
        Experience
        </Link></li>

        <li> <Link to="project" smooth={true} duration={500} >
          Projects
        </Link></li>
        <li> <Link to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>
    
    {/* Hamburger */}
    <div className='md:hidden z-10' onClick={toggleMobileNav}>{!nav? <GiHamburgerMenu /> : <GiCrossedSwords />} </div>
    {/* Mobile View */ }
    <ul className= {!nav ? "hidden" : 'absolute left-0 top-0 w-full h-screen bg-black flex flex-col justify-center items-center'} >
        <li className='py-6 text-5xl'>
          <Link onClick={toggleMobileNav} to="home" smooth={true} duration={500} >
          Home
        </Link>
        </li>
        <li className='py-6 text-5xl'>
          <Link  onClick={toggleMobileNav} to="skills" smooth={true} duration={500} >
          Skills
        </Link>
        </li>
        <li className='py-6 text-5xl'>
          <Link onClick={toggleMobileNav}  to="experience" smooth={true} duration={500} >
        Experience
        </Link></li>
        <li className='py-6 text-5xl'>
          <Link onClick={toggleMobileNav}  to="project" smooth={true} duration={500} >
          Projects
        </Link></li>
        <li className='py-6 text-5xl'>
          <Link  onClick={toggleMobileNav} to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>
      {/* Social Icon */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-500'>
          <a className='flex justify-between items-center w-full text-gray-300' href="/">Linkedin
          <AiFillLinkedin size={35}/>
          </a>
</li>
<li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-400'>
          <a className='flex justify-between items-center w-full text-gray-100' href="/">Twitter
          <BsTwitter size={35}/>
          </a>
</li>
<li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300' href="/">GitHub
          <BsGithub size={35}/>
          </a>
</li>
<li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800'>
          <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume
          <BsFileEarmarkPersonFill size={35}/>
          </a>
</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
