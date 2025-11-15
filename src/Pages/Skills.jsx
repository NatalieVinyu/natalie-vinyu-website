import React from 'react';
export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      skills: ["React", "Typescript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["SQL", "Node.js"]
    },
    {
      title: "Tools & Others",
      skills: ["VS Code", "Git"]
    }
  ]
  return (
    <div className='bg-black'>
      <div className="text-white flex flex-col items-center">
        <h2 className='text-white'>Skills and Technologies</h2>
        <div className='w-20 h-1 bg-white mt-2 rounded-full'></div>
      </div>

      <div className='grid md:grid-cols-3 gap-6 text-white pt-12'>
          {skills.map((item, index) => (
            <div className='border-2 border-solid rounded-xl m-10 p-5' key={index}>
              <h3 className='text-2xl font-bold'>{item.title}</h3>

              <ul className='list-none'>
                {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}</ul>
        </div>
          ))}
        </div>
      
      </div>
  )
}