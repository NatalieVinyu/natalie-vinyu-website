import React from 'react';
export default function Contact() {
  const card = [
    {
      title: "Email",
      description: "nvinyu@icloud.com"
    },
    {
      title: "Location",
      description: "Available for Remote Work"
    },
    {
      title: "Response Time",
      description: "Within 24 Hours"
    },
  ]
  return (
    <section className='bg-black text-white pt-16'>
      <div id="contact" className="max-w-4xl mx-auto relative z-10">
        <div className="text-white flex flex-col items-center">
          <h1 className='text-2xl'>Get In Touch</h1>
          <div className='w-20 h-1 bg-white mt-2 rounded-full'></div>
        </div>

        <div className='text-white flex justify-center p-10'>
          <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='p-6 text-center border-2 rounded'>
            <h3 className='font-semibold mb-2 text-2xl'>Email</h3>
            <a href="" className='text-sm'>nvinyu@icloud.com</a>
          </div>

          <div className='p-6 text-center border-2 rounded'>
            <h3 className='font-semibold mb-2 text-2xl'>Location</h3>
            <p className='text-sm'>Available for Remote Work</p>
          </div>

          <div className='p-6 text-center border-2 rounded'>
            <h3 className='font-semibold mb-2 text-2xl'>Response Time</h3>
            <p className='text-sm'>Within 24 Hours</p>
          </div>
        </div>
      

        {/* (Form) */}
          <form className="p-8 space-y-6 border">
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" className='w-full px-4 py-3 border rounded-lg' placeholder='your name' />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" className='w-full px-4 py-3 border rounded' placeholder='your.email@example.com'/>
              </div> 
            </div>
            <div>
              <label htmlFor="messsage" className='block text-sm font-medium mb-2'>Message</label>
              <textarea name="message" id="" className='border px-4 py-3' placeholder='How can i help you?'></textarea>
            </div>
            <button type='submit' className='w-full border'>Send Message</button>
            
          </form>
      </div>  
  </section>
    
  )
}