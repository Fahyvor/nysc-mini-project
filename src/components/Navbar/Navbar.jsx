import { useState } from 'react'
import './navbar.css'
import navLogo from '../../assets/logo.jpeg';
import { FaThreeBars } from 'react-icons/fa'


const Navbar = () => {

  return (
    <>
    <div className='flex w-full items-center gap-3'>
      <div className='nav-logo w-1/6'>
        <a href='/'><img src={navLogo} alt='logo' /></a>
      </div>

      <div className='logo-header text-center max-sm:py-3'>
        <h2 className='text-green-950 font-bold tracking-wider
        text-2xl max-sm:text-sm'>
          NATIONAL YOUTH SERVICE CORPS
        </h2>
        <h2 className='text-red-600 font-bold max-sm:font-semibold
        tracking-wider'>SERVICE AND HUMILITY</h2>
      </div>

      <FaThreeBars />

      <div className='nav-links flex gap-5 
      items-center justify-between px-3 max-sm:hidden'>
        <a href='/'>Home</a>
        <a href='/members'>Corps Members</a>
        <a href='/assignment'>Assigned Members</a>

        <div className='rounded-lg p-3 contact-container'>
          <a>Contact Us</a>
        </div>
      </div>
    </div>
    <div className='red-bottom-line bg-red-700 text-red-700'>
      <p>.</p>
    </div>
    </>
  )
}

export default Navbar