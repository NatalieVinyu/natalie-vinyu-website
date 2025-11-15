import React from 'react';

export default function Footer() {
  return (
   <footer className="py-12 px-6 border-t border-gray-800 overflow-hidden bg-black text-white">
      <div className="absolute left-0 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl"></div>

  <div className="max-w-6xl mx-auto relative">
    <div className="grid md:grid-cols-2 justify-between gap-6">

      {/* Name + Tagline */}
      <div className="">
        <h3 className="text-2xl font-bold mb-2">Natalie Vinyu</h3>
        <p className="text-sm">Building digital experiences, one line at a time</p>
      </div>

      {/* Socials */}
      <div className="flex gap-4">
        <a 
          href="https://github.com/NatalieVinyu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/natalie-vinyu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>

        <a 
          href="mailto:natalievinyu@gmail.com"
          className="border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          Email
        </a>
      </div>

      {/* Copyright */}
      <div className='mt-8 pt-8 border-t border-gray-800 text-center w-full'>
        <p className='text-sm flex items-center justify-center gap-2'>
          © {new Date().getFullYear()} Natalie Vinyu — Made with lots of coffee ☕
        </p>
      </div>

    </div>
  </div>
</footer>



  );
}
