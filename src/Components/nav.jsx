import React from 'react';

export default function Navbar() {
  return (
    <div className='fixed w-full bg-gray-100 bg-opacity-25 backdrop-blur-md shadow-lg p-4 z-10 top-0'>
      <nav className='container'>        
          <ul className='flex space-x-20 justify-end'>
            <li>
              <a href='#about'>
                About
              </a>
            </li>
            <li>
              <a href='#services'>
                Services
              </a>
            </li>
            <li>
              <a href='#contact'>
                Contact
              </a>
            </li>
          </ul>
      </nav>
    </div>
  )
}