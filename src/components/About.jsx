import React from 'react';

const About = () => {
  return (
  <div 
    name="about" 
    className='w-full h-screen bg-gradient-to-b from-zinc-800  to-black text-white'
  >
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>      
      <div className='py-4'>
        <p className='text-4xl font-bold inline border-b-4 border-orange-600'>About</p>
      </div>

      <p className='mt-5' align="justify">
        I am a recent graduate from the University of Manitoba with a Bachelor of Science (B.Sc.) in Computer Science. The program has given me a strong command of important programming and computer science concepts, as well as in-depth knowledge of core software engineering principles, development practices, and design patterns. 
      </p>
      
      <br />

      <p>
        I am passionate about the computer science field and spend most of my free time enhancing my coding skills or learning new technology/software.
      </p>

      <br />

      <p>
        Outside of computer science, I am a big fitness enthusiast and love working out. I also enjoy travelling, music, and reading.
      </p>
    </div>
  </div>
  );
  
};

export default About;
