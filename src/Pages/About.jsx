import React from 'react';

export default function About() {
  return (
    <div id='about' className='container mx-auto min-h-screen flex flex-col justify-center '>
      <div className='bg-black'>
        <div className='text-white'>
        <h1 className='text-2xl'>About me</h1>
        <br />
        My journey into web development began out of sheer curiosity, which quickly grew into a full-fledged passion. I’ve spent countless hours honing my skills in HTML, CSS, JavaScript, and React, building everything from simple landing pages to dynamic, responsive web applications. I’m always eager to learn and embrace new challenges, and I thrive in environments where creativity meets technology. I’m excited to bring my self-driven, problem-solving mindset to new projects and collaborate with like-minded individuals to create impactful digital experiences.
        </div>

        <br />

        <div className='justify-center items-center' id='skills'>
          <h1>Skills</h1>
          <br />
          <ul className='list-disc list-inside'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

      </div>

      <div>
      </div>
    </div>
  )
}



