import React from 'react';
import ixalan from '../assets/portfolio/ixalan.png';
import chowtown from '../assets/portfolio/chowTown.png';
import findingaurora from '../assets/portfolio/findingAurora.png';
import wbport from '../assets/portfolio/portfolio.png';
import gameOfLife from '../assets/portfolio/GameOfLife.png'

const Projects = () => {

  // Projects array
  const projects = [
    {
      id: 1,
      src: ixalan,
      title: "Ixalan ",
      text: "(An android application for booking movie tickets)",
      href: "https://github.com/yasbik/Ixalan"
    },
    {
      id: 2,
      src: chowtown,
      title: "ChowTown ",
      text: "(An interactive website for ordering food)",
      href: "https://github.com/yasbik/Chow-Town"
    },
    {
      id: 3,
      src: gameOfLife,
      title: "Game of Life ",
      text: "(Simulation game demonstrating finite automaton)",
      href: "https://github.com/yasbik/Game-of-Life"
    },
    {
      id: 5,
      src: findingaurora,
      title: "Finding Aurora API ",
      text: "(An OpenAPI Specification (OAS) Project)",
      href: "https://github.com/yasbik/Finding-Aurora-API"
    },
    {
      id: 5,
      src: wbport,
      text: "Personal Portfolio Website",
      href: "https://github.com/yasbik/portfolio"
    }
  ];

  return (
    <div 
      name="projects" 
      className='bg-gradient-to-b from-slate-800  to-black w-full text-white md:min-h-screen'
    >
      {/* Primary container */}
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        {/* Heading */}
        <div className='pb-4 mt-12'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
            Projects
          </p>
          <p className='py-6 font-bold'>
            Check out some of my work!
          </p>
        </div>

        {/* Display projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({id, src, title, text, href}) => (
            <div 
              key={id} 
              className='shadow-md shadow-gray-600 rounded-lg'
            >
              {/* Thumbnails */}
              <a 
                href={href}
                target="_blank" 
                rel="noreferrer"
              >
                <img 
                  src={src} 
                  alt="Project Thumbnail" 
                  className='rounded-md duration-200 hover:scale-105' 
                />

                {/* Descriptions */}
                <button className='flex items-center justify-center w-full px-3 py-3 duration-200 hover:scale-105'>
                  {title}{text}
                </button>
              </a>                  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
