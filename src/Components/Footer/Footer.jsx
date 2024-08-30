/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (

    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/4 p-4'>
            <div className='flex items-center mb-4'>
              <Logo width='100px' />
            </div>
            <p className='text-sm text-gray-400'>
              &copy; 2023 Your Company. All Rights Reserved.
            </p>
          </div>
          <div className='w-full lg:w-1/4 p-4'>
            <h3 className='text-xs font-semibold uppercase text-gray-400 mb-4'>
              Company
            </h3>
            <ul>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Features
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Pricing
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-1/4 p-4'>
            <h3 className='text-xs font-semibold uppercase text-gray-400 mb-4'>
              Support
            </h3>
            <ul>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Account
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Help
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-1/4 p-4'>
            <h3 className='text-xs font-semibold uppercase text-gray-400 mb-4'>
              Legals
            </h3>
            <ul>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className='mb-2'>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className='text-base text-gray-300 hover:text-gray-100' to='/'>
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
