import React from 'react';

export default function About() {
  return (
    <section id='about' className='mx-auto min-h-screen flex items-center justify-center bg-black'>
    <div className=''>
      <div className='container'>
        <div className='text-white'>
          <h1 className='text-2xl justify-center'>About me</h1>
        <br />
          <p>My journey into web development began out of sheer curiosity, which quickly grew into a full-fledged passion. I’ve spent countless hours honing my skills in HTML, CSS, JavaScript, and React, building everything from simple landing pages to dynamic, responsive web applications. I’m always eager to learn and embrace new challenges, and I thrive in environments where creativity meets technology. I’m excited to bring my self-driven, problem-solving mindset to new projects and collaborate with like-minded individuals to create impactful digital experiences.</p>
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
    </section>
  )
}



