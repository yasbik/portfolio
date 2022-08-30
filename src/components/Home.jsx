import React from 'react';
import HeroImage from "../assets/heroImage.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div 
      name="home" 
      className="h-screen w-full bg-gradient-to-b from-black via-black to-zinc-800"
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div>
          <p className='my-60'>  </p>
        </div>
        
        <div className='flex flex-col justify-center h-full'>
          <h3 className='font-bold text-xl sm:text-2xl text-orange-600'>Hi, my name is</h3>

          <h1 className='text-4xl sm:text-6xl font-bold text-white py-4 mr-3'>Abu Yasin Sabik</h1>

          <h2 className='text-3xl sm:text-5xl font-bold text-gray-400 mr-3'>
            I am a Software Developer.
          </h2>

          <p className='text-gray-500 py-4 max-w-md mr-3' align="justify">
            I am a recent graduate with a Bachelor's degree in Computer Science. I love programming and learning new tools/techology. 
            I am currently working on improving my knowledge and skills in software design, development, testing, and debugging.
          </p>

          <div>
            <Link 
              to='portfolio' smooth duration={500} 
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-red-700 cursor-pointer'
            >
              Portfolio

              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className="ml=1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="My Personal Portrait" className='rounded-2xl mx-auto w-3/5 md:w-4/5' />
        </div>
        <div>
          <p className='my-40'>  </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
