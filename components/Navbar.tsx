'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  console.log('Navbar component mounted')
  
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='fixed left-0 top-0 w-full z-50 ease-in duration-300 bg-white shadow-md h-[90px]' 
         style={{ '--navbar-height': '70px' } as React.CSSProperties}>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href='/' className="z-50">
          <h1 className='font-bold text-2xl cursor-pointer'>
            ReadWrite<span className='text-blue-600'>Fun</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className='hidden sm:flex items-center'>
          <li className='p-4 hover:text-blue-600 ease-in duration-200'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 hover:text-blue-600 ease-in duration-200'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/signup' className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ease-in duration-200'>
              Sign Up
            </Link>
          </li>
          <li className='p-4'>
            <Link href='/login' className='text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 ease-in duration-200'>
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? 
            <AiOutlineClose size={20} /> 
            : 
            <AiOutlineMenu size={20} />
          }
        </div>

        {/* Mobile Navigation */}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
        }>
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-blue-600 ease-in duration-200'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-blue-600 ease-in duration-200'>
              <Link href='/about'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4'>
              <Link href='/signup' className='inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 ease-in duration-200'>
                Sign Up
              </Link>
            </li>
            <li onClick={handleNav} className='p-4'>
              <Link href='/login' className='inline-block text-blue-600 border border-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 ease-in duration-200'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 