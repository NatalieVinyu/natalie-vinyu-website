import React from 'react';

export default function Navbar() {
  return (
    <div className='fixed w-full bg-gray-100 bg-transparent bg-opacity-25 backdrop-blur-md shadow-lg p-8 z-10 top-0'>
      <nav className='container text-white'>        
          <ul className='flex space-x-20 justify-end'>
            <li>
              <a href='#about'>
                About
              </a>
            </li>
            <li>
              <a href='#skills'>
                Skills
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