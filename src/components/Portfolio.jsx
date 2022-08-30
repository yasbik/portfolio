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
      text: "Ixalan"
    },
    {
      id: 2,
      src: chowtown,
      text: "ChowTown"
    },
    {
      id: 3,
      src: findingaurora,
      text: "Finding Aurora API"
    },
    {
      id: 4,
      src: reactParallax,
      text: "Personal Portfolio"
    },
  ];

  return (
    <div 
      name="portfolio" 
      className='bg-gradient-to-b from-blue-400 to-blue-600 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
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
            {portfolios.map(({id, src, text}) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    {text}
                  </button>
                  
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
