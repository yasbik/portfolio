import React from 'react';

const About = () => {
  return (
  <div 
    name="about" 
    className='w-full h-screen bg-gradient-to-b from-zinc-800 to-black text-white'
  >
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='py-4'>
        <br />
        <br />
        <br />
        <p className='text-4xl font-bold inline border-b-4 border-orange-600'>About</p>
      </div>

      <p className='mt-5' align="justify">
        I am a recent graduate from the University of Manitoba with a Bachelor of Science (B.Sc.) in Computer Science. My four years of studying computer science have given me a strong command of important programming and computer science concepts, as well as in-depth knowledge of core software engineering principles, development practices, and design patterns.

        <br />
        <br />

        Aside from academia, I am also very passionate about the computer science field, and spend most of my free time enhancing my coding skills or learning new technology/software. Always striving to improve, I have worked on and contributed to several high functioning and scalable projects, all of which have broadened my expertise and understanding of the full stack of software development, including web development and mobile development. 

        <br />
        <br />

        Additionally, I have several years of experience in marketing, sales and customer service, giving me excellent interpersonal skills, and the ability to work well in a team or independently with minimal supervision. I managed to do all of these while being a full-time student, further demonstrating my diligence and ability to handle multiple tasks of varying importance. 

      </p>
    </div>
  </div>
  );
  
};

export default About;
