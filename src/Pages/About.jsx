import React from 'react';

export default function About() {
  return (
    <section id='about' className='bg-black p-26'>
      <div className="flex justify-center">
        <div className='text-white'>About Me</div>
        <span className=''></span>
      </div>

      <div className='justify-center text-white pt-12'>
        <p>I'm a web developer with a passion for creating exceptional digital experiences. My journey in web development started with a curiosity about how things work on the web, and has evolved into a career focused on building impactful solutions.
        <br />
        I specialize in modern web technologies and love staying up-to-date with the latest trends and best practices. Whether it's crafting pixel-perfect interfaces or architecting robust backend systems, I bring dedication and creativity to every project.
        <br />
        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
      </div>

      <div className='text-white pt-12'>
        <div className=''>
          <h4>Clean Code</h4>
          <p>Writing maintainable, scalable code that follows baest practices</p>
        </div>
        <div>
          <h4>Mordern Design</h4>
          <p>Creating beautiful interfaces with attention detail</p>
        </div>
        <div>
          <h4>Performance</h4>
          <p>building fast, optimized applications for the best user experience</p>
        </div>
      </div>
    
    </section>
  )
}



