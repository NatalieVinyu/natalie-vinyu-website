import React from 'react';
export default function Projects() {
  const myprojects = [
    {
      title: "e-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and asmin dashboard",
      skills: ["React", "Node.js", "SQL"],
      code: "",
      demo: "",
    },
    {
      title: "Dictionary App",
      description: "Collaborative task management platform with real-time update, team features, and advanced filtering capabilities",
      skills: ["HTML", "CSS", "JavaScript", "API"],
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
      
      <div className='text-white flex justify-center p-10'>
        <p>Here are some of my recent projects showcasing my skills and passion for web development</p>
      </div>

      <div className='text-white pt-12'>
        <div className='grid md:grid-cols-2 gap-6'>
          {myprojects.map((item, index) => (
            <div className='border-2 border-solid rounded-xl p-4' key={index}>
              <h3 className='text-2xl font-bold'>{item.title}</h3>
              <p>{item.description}</p>

              <div>
                <ul className='list-none flex'>
                {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
                ))}</ul>
              </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  )
}