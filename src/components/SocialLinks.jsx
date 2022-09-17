import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {

  // Socials array
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/yasinsabik/",
      style: "rounded-tr-md bg-sky-700",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/yasbik",
      style: "bg-gray-700",

    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:yasin00sabik@gmail.com",
      style: "bg-emerald-600",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/AbuYasinSabik_Resume.pdf",
      download: true,
      style: "rounded-br-md bg-orange-600",
    },
  ];

  return (
    // Primary container
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      
      {/* Socials list */}
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li 
            key={id} 
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
          >
            <a 
              href={href}
              className="flex justify-between items-center w-full text-white" 
              download={download} 
              target="_blank" 
              rel="noreferrer"
            > 
              {child} 
            </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks;
