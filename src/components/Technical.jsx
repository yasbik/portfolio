import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png'
import nodejs from '../assets/nodejs.png';
import sql from '../assets/sql.png';
import tailwind from '../assets/tailwind.png';
import java from '../assets/java.png';
import python from '../assets/python.jpg'
import neo4j from '../assets/neo4j.png';
import android from '../assets/android.png';
import c from '../assets/c.png';
// import bootstrap from '../assets/bootstrap.png';
// import github from '../assets/github.png';


const Technical = () => {

  // Skillset array
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTLM',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: c,
      title: 'C/C++',
      style: 'shadow-violet-500'
    },
    {
      id: 5,
      src: java,
      title: 'Java',
      style: 'shadow-red-600'
    },
    {
      id: 6,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-lime-600'
    },
    {
      id: 7,
      src: sql,
      title: 'SQL',
      style: 'shadow-yellow-800'
    },
    {
      id: 8,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 9,
      src: android,
      title: 'Android Studio',
      style: 'shadow-green-600'
    },
    {
      id: 10,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-600'
    },
    {
      id: 12,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 12,
      src: neo4j,
      title: 'Neo4J',
      style: 'shadow-indigo-500'
    },
    // {
    //   id: 8,
    //   src: github,
    //   title: 'GitHub',
    //   style: 'shadow-gray-400'
    // },
    // {
    //   id: 14,
    //   src: bootstrap,
    //   title: 'Bootstrap',
    //   style: 'shadow-purple-800'
    // },
  ];


  return (
    <div 
      name='technical' 
      className='bg-gradient-to-b from-black to-slate-800 w-full min-h-screen'
    >
      {/* Primary container */}
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

        {/* Heading */}
        <div className='mt-20'>
          <p className='text-4xl font-bold border-b-4 border-orange-600 inline my-20'>
            Technical
          </p>

          <p className='py-4 font-bold'>
            These are the some of the tools/technologies I have worked with!
          </p>
        </div>

        {/* Skillset list */}
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8 text-center py-4 px-4 sm:px-0'>
          {techs.map(({id, src, title, style}) => (

            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

              {/* Thumbnail */}
              <img 
                src={src} 
                alt="Technical skill thumbnail" 
                className='w-10 mx-auto' 
              />
              
              {/* Skill name */}
              <p className='mt-2'>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technical;
