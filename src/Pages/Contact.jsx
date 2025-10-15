import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="mx-auto min-h-screen justify-center bg-black text-white">
      <h1>Get In Touch</h1>
        <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>

      <div className="w-full max-w-6xl p-8 text-white">
        {/* (Form) */}
        <div className=''>
          <form className="shadow-md rounded-lg p-6">
            
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullname" className="block font-medium">Full Name</label>
              <input
                type="text"
                id="fullname"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              /> 
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              /> 
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium">Message</label>
              <textarea 
                id="message"
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />         
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}