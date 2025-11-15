import React from 'react';
export default function Projects() {
  const projects = [
    {
      title: "e-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and asmin dashboard",
      skills: "",
      code: "",
      demo: "",
    },
    {
      title: "Dictionary App",
      description: "Co",
      skills: "",
      code: "",
      demo: "",
    }
  ]
  return (
    <div className='bg-black'>
      <div className="text-white flex flex-col items-center">
        <h2 className='text-white text-2xl'>Projects</h2>
        <div className='w-20 h-1 bg-white mt-2 rounded-full'></div>
      </div>
      
      <div>
        <p>Here are some of my recent projects showcasing my skills and passion for web development</p>
      </div>

      <div></div>
    </div>
  )
}