import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png'
import nodejs from '../assets/nodejs.png';
import sql from '../assets/sql.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import java from '../assets/java.png';
import python from '../assets/python.jpg'
import neo4j from '../assets/neo4j.png';
import android from '../assets/android.png';
import bootstrap from '../assets/bootstrap.png';
import c from '../assets/c.png';

const Experience = () => {

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
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 9,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 10,
      src: android,
      title: 'Android Studio',
      style: 'shadow-green-600'
    },
    {
      id: 11,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 12,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-600'
    },
    {
      id: 13,
      src: neo4j,
      title: 'Neo4J',
      style: 'shadow-indigo-500'
    },
    {
      id: 14,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-800'
    },
  ];


  return (
    <div name='experience' className='bg-gradient-to-b from-zinc-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-orange-600 p-2 inline'>Technical</p>
          <p className='py-4 mt-6'>These are the some of the tools/technologies/frameworks I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center py-4 px-4 sm:px-0'>

          {techs.map(({id, src, title, style}) => (

            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-14 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
