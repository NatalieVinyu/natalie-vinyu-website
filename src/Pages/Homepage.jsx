import React from 'react' 

export default function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('./assets/hero-bg.jpg')] bg-cover bg-center bg-violet-950/90 bg-blend-overlay">
      <div className="text-center space-y-8" >
        <h1 className="text-6xl md:text-9xl text-white font-bold">Natalie Vinyu</h1>
        <h2 className="text-3xl md:text-7xl text-white">Front-end Developer</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <button className="px-6 py-3 text-white rounded-lg  transition cursor-pointer">
            Download CV
          </button>
          <a href="https://www.linkedin.com/in/natalie-vinyu" target='_blank' rel="noopener noreferrer" className="px-6 py-3 border-2 text-white rounded-lg transition cursor-pointer">
            Let's connect
          </a>
        </div>
      </div>
    </div>
  );
}
