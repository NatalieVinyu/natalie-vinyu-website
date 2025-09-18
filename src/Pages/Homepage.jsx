import React from 'react' 

export default function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center space-y-8">
        <h1 className="text-6xl md:text-9xl font-bold">Natalie Vinyu</h1>
        <h2 className="text-3xl md:text-7xl text-gray-700">Front-end Developer</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Let's Connect
          </button>
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
