import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {TbArrowRightCircle} from 'react-icons/tb';
import {Link} from 'react-scroll';
import Typed from 'react-typed';


const Home = () => {
  return (
    <div 
      name="home" 
      className="h-screen w-full bg-gradient-to-b from-black to-slate-800"
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        
        <div className='flex flex-col justify-center h-full mt-20'>
          <h3 className='font-bold sm:text-xl text-gray-400'>
            Hello, world!
          </h3>

          {/* <h1 className='text-4xl sm:text-6xl font-bold text-white py-4 mr-3'>Abu Yasin Sabik</h1> */}

          <div className='text-xl sm:text-2xl'>
            <h3 className=' font-bold text-white mr-2 py-2'>
              I am
              <Typed
                className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mx-2'
                strings={[
                  "Abu Yasin Sabik.",
                  "a Computer Science Graduate.",
                  "an aspiring Software Developer.",
                  "a STEM Tutor.",
                  "a lifelong learner."
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </h3>
          </div>

          <p className='text-gray-500 py-2 max-w-md mr-3' align="justify">
            I am a recent graduate with a Bachelor's degree in Computer Science. I love programming and learning new tools/techology. 
            I am currently working on improving my knowledge and skills in software design, development, testing, and debugging. Please take a look around!
          </p>

          <div>
            <Link 
              to='technical' smooth duration={500} 
              className='group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-red-700 cursor-pointer'
            >
              Portfolio

              <span className='ml-2 group-hover:rotate-90 duration-300'>
                <TbArrowRightCircle size={25} className="ml=1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img 
            src={HeroImage} 
            alt="My Personal Portrait" 
            className='rounded-2xl pl-4 mx-auto w-2/3 md:w-full' 
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
