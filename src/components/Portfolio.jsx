import React from 'react';
import ixalan from '../assets/portfolio/ixalan2.png';
import chowtown from '../assets/portfolio/chowTown.png';
import findingaurora from '../assets/portfolio/findingAurora.png';
import reactParallax from '../assets/portfolio/reactParallax.jpg';

const Portfolio = () => {

  const portfolios = [
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
      src: findingaurora,
      title: "Finding Aurora API ",
      text: "(An OpenAPI Specification (OAS) Project)",
      href: "https://github.com/yasbik/Finding-Aurora-API"
    },
    {
      id: 4,
      src: reactParallax,
      text: "Personal Portfolio Website"
    },
  ];

  return (
    <div 
      name="portfolio" 
      className='bg-gradient-to-b from-black  to-zinc-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-4'>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <p className='text-4xl font-bold inline border-b-4 border-orange-600 p-2'>
            Projects
          </p>
          <p className='py-6'>
            Check out some of my work here
          </p>
        </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id, src, title, text, href}) => (
              <div 
                key={id} 
                className='shadow-md shadow-gray-600 rounded-lg'
              >
                <a href={href}>
                  <img src={src} alt="ProjectImage" className='rounded-md duration-200 hover:scale-105' />

                  <button className='flex items-center justify-center w-full px-3 py-3 duration-200 hover:scale-105'>
                    {title}{text}
                  </button>
                </a>                  
              </div>
            ))}
          </div>
          <div>
            <p className='my-80'> </p>
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
