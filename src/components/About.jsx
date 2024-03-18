import React from 'react';

const About = () => {
  return (
  <div 
    name="about" 
    className='w-full min-h-screen bg-gradient-to-b from-slate-800  to-black text-white'
  >
    {/* Primary container */}
    <div 
      className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
    >
      {/* Heading */}
      <div className='py-4 mt-10'>
        <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
          About
        </p>
      </div>

      {/* Description */}
      <p className='mt-4 text-justify'>
        My name is Abu Yasin Sabik. I am a graduate from the University of Manitoba with a Bachelor of Science (B.Sc.) in Computer Science.  My fours years of studying computer science have given me a strong command of important programming and computer science concepts, as well as in-depth knowledge of core software engineering principles, development practices, and design patterns. 
      </p>
      
      <p className='mt-4 text-justify'>
        I am passionate about the computer science field and spend most of my free time enhancing my coding skills, or learning new technology/software. I have completed two Software Development Internships, where I worked on several high-functioning and scalable projects. The internships have not only given me real-world experience, but they also taught me the aspects of collaborating in a team environment, further broadening my expertise and understanding of the full stack of software development.
      </p>

      <p className='mt-4 text-justify'>
        Currently, I am working as a Software Developer in a technology company where I am continuously developing and maintaining high-functioning software applications. I am also a part-time Computer Science and Math Tutor for an educational technology company, where I tutor STEM students from varying grades and ability levels. Additionally, I have over two years of experience as a Business Analyst for a large, multinational food chain where, my data analytics and solution implementation led to a 20% increase in overall sales across all local branches in my city. Even aside from work and academia, I am also very passionate about the computer science field and spend most of my free time enhancing my coding skills or learning new technology/software.
      </p>
    </div>
  </div>
  );

  // I am someone who loves mathematics, and have been a math and science tutor throughout my highschool and university life. When I took my first programming class at university, I instantly fell in love with programming, since a lot of programming is essentially applied mathematics.
  
};

export default About;
