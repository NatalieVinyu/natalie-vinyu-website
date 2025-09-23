import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="mx-auto min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl p-8">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Let’s work together!</h1>
          <p className="text-gray-600">I’d love to hear from you. Fill out the form and I’ll get back to you as soon as possible.</p>
        </div>

        {/* Right Section (Form) */}
        <div>
          <form className="bg-white shadow-md rounded-lg p-6">
            
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                id="fullname"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              /> 
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              /> 
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
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