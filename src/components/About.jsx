import React from 'react';

const About = () => {
  return (
  <div 
    name="about" 
    className='w-full h-screen bg-gradient-to-b from-slate-800  to-black text-white'
  >
    {/* Primary container */}
    <div 
      className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' 
      align="justify"
    >
      {/* Heading */}
      <div className='py-4'>
        <p className='text-4xl font-bold inline border-b-4 border-orange-600'>About</p>
      </div>

      {/* Description */}
      <p className='mt-5'>
        My name is Abu Yasin Sabik. I am a recent graduate from the University of Manitoba with a Bachelor of Science (B.Sc.) in Computer Science. I am someone who loves mathematics, and have been a math and science tutor throughout my highschool and university life. When I took my first programming class at university, I instantly fell in love with programming, since a lot of programming is essentially applied mathematics. My fours years of studying computer science have given me a strong command of important programming and computer science concepts, as well as in-depth knowledge of core software engineering principles, development practices, and design patterns. 
      </p>
      
      <br />

      <p>
        I am passionate about the computer science field and spend most of my free time enhancing my coding skills, or learning new technology/software. I have worked on high-functioning and scalable projects which have broadened my expertise and understanding of the full stack of software development, including web development and mobile development.
      </p>

      <br />

      <p>
        Outside of computer science, one of my hobbies is teaching, and I am fortunate to be currently working as a STEM Tutor where I have the opportunity to help students from various grades and ability-levels. Having worked as a tutor for over 5 years, I truly believe that good teachers can have an immensely positive impact on the lives of their students. I have also worked in sales and customer service. All of my experiences have greatly helped me hone my interpersonal and organizational skills. I am a BIG fitness enthusiast and love working out. I also enjoy travelling, music, and reading.
      </p>
    </div>
  </div>
  );
  
};

export default About;
