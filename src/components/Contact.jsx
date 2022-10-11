import React from 'react';

const Contact = () => {

  return (
    <div 
      name='contact' 
      className='w-full h-screen bg-gradient-to-b from-black to-slate-800 p-4 text-white'
    >
      {/* Primary container */}
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

        {/* Heading */}
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
            Contact
          </p>
          <p className='py-2 mt-6 font-bold'>
            Submit the form below to get in touch with me. I would love to hear from you!
          </p>
        </div>

        {/* Contact form */}
        <div className='flex justify-center items-center'>
          <form 
            action='https://getform.io/f/4c597fe7-6aad-49d9-ab47-a3c2eeea7623' 
            method="POST"
            className='flex flex-col w-full md:w-1/2'
          >
            <input 
              type="text" 
              name="name" 
              placeholder='Enter your name' 
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />

            <input 
              type="text" 
              name="email" 
              placeholder='Enter your email' 
              className=' my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
            />

            <textarea 
              name="message" 
              placeholder='Enter your message' 
              rows="6" 
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />

            {/* Button to get in touch */}
            <button className='text-white bg-gradient-to-r from-orange-500 to-red-700 px-4 py-2 mt-3 mb-9 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk!
            </button>
          </form>
        </div>



        <div className='lg:hidden flex mx-4 font-bold justify-center items-center'>
          Thank you for looking around! Here is more of me:
        </div>

        <div className='lg:hidden flex flex-row justify-center items-center'>
          <div>
            <a 
              href="https://www.linkedin.com/in/yasinsabik/"
              target="_blank" 
              rel="noreferrer"
            >
              <button className='bg-sky-700 px-2 py-1 my-2 flex items-center rounded-md hover:scale-110 duration-300'>
                LinkedIn
              </button>
            </a>
          </div>

          <div>
            <a 
              href="https://github.com/yasbik"
              target="_blank" 
              rel="noreferrer"
            >
              <button className='bg-gray-700 px-2 py-1 my-2 mx-4 flex items-center rounded-md hover:scale-110 duration-300'>
                GitHub
              </button>
            </a> 
          </div>

          <div>
            <a 
              href="/AbuYasinSabik_Resume.pdf"
              download={true}
              target="_blank" 
              rel="noreferrer"
            >
              <button className='bg-emerald-600 px-2 py-1 my-2 flex items-center rounded-md hover:scale-110 duration-300'>
                Resume
              </button>
            </a>
            
          </div>
        </div>



      </div>
    </div>
  );
};

export default Contact;
