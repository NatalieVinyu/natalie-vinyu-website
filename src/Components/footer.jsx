import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
   <footer className="py-12 px-6 border-t border-gray-800 overflow-hidden bg-black text-white">
    
    <div className="max-w-6xl mx-auto relative">
      <div className='flex flex-col'>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Natalie Vinyu</h3>
          <p className='text-sm'>Building digital experiences</p>
        </div>

        <div className="flex justify-center md:justify-end gap-4">
          <a 
            href="https://github.com/NatalieVinyu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/natalie-vinyu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FaLinkedin />
          </a>

          <a 
            href="mailto:natalievinyu@gmail.com"
            className="border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      
        

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-gray-800 text-center w-full'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Natalie Vinyu — Made with lots of coffee ☕
          </p>
        </div>

      </div>
</footer>



  );
}
