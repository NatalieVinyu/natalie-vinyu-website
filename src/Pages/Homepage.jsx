import React from 'react' 
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black flex-col space-y-8">
      <div className="text-center space-y-8" >
        <h1 className="text-6xl md:text-9xl text-white font-bold">Natalie Vinyu</h1>

        <h2 className="text-3xl md:text-7xl text-white"><Typewriter
          options={{
            strings: ['Software Engineerer', 'Web Developer'],
            autoStart: true,
            loop: true,
            deleteSpeed: 90,
            cursor: '|',
            delay: 75,
          }}
          />
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <button className="px-6 py-3 text-white rounded-lg  transition cursor-pointer">
            Download CV
          </button>
          <a href="https://www.linkedin.com/in/natalie-vinyu" target='_blank' rel="noopener noreferrer" className="px-6 py-3 border-2 text-white rounded-lg transition cursor-pointer">
            Let's connect
          </a>
        </div>

        <div className='mt-12'>
          <a href="">
            <FaGithub className="text-white text-3xl mx-4 inline-block hover:text-gray-300 transition cursor-pointer" />
          </a>
          <a href="">
            <FaLinkedin className="text-white text-3xl mx-4 inline-block hover:text-gray-300 transition cursor-pointer" />
          </a>
          <a href="mailto:natalievinyu@gmail.com">
            <FaEnvelope className="text-white text-3xl mx-4 inline-block hover:text-gray-300 transition cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
