import React from 'react';
{/* CARD COMPONENT */}
export default function About() {
  const highlights = [
    { 
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices"
    },
    {
      title: "Mordern Design",
      description: "Creating beautiful interfaces with attention detail "
    },
    {
      title: "Performance",
      description: "Building fast, optimized applications for the best user experience"
    }
  ]


  return (
    <section id='about' className='bg-black p-26'>
      <div className="flex justify-center">
        <div className='text-white'>About Me</div>
        <span className=''></span>
      </div>

      <div className='justify-center text-white pt-12'>
        <p>I'm a web developer with a passion for creating exceptional digital experiences. My journey in web development started with a curiosity about how things work on the web, and has evolved into a career focused on building impactful solutions.</p>
        <br />
        <p>I specialize in modern web technologies and love staying up-to-date with the latest trends and best practices. Whether it's crafting pixel-perfect interfaces or architecting robust backend systems, I bring dedication and creativity to every project.</p>
        <br />
       <p> When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
      </div>

      {/* HIGHLIGHTS */}
      <div className='text-white pt-12'>
        <div className=''>
          {highlights.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
        </div>
          ))}
        </div>
      </div>
    
    </section>
  )
}



