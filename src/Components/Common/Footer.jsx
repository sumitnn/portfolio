import React from 'react'
import { SiKaggle } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=' h-[250px] mt-10 w-full flex gap-4 flex-col justify-center items-center'>
      <h2 className='text-3xl '>
        <span className='text-[#E91E63]'>Sumit </span>Nautiyal
      </h2>
      <h3 className='text-2xl '>
        FOLLOW <span className='text-[#E91E63]'>ME</span>
      </h3>

      <div className='flex text-3xl gap-10 mb-8 '>
        <a href='https://github.com/sumitnn' target='_blank'>
          <FaGithub className=' cursor-pointer hover:shadow-[#E91E63] shadow-xl ' />
        </a>
        <a href='https://www.linkedin.com/in/sumit-nautiyal-/' target='_blank'>
          <FaLinkedinIn className=' cursor-pointer hover:shadow-[#E91E63] shadow-xl ' />
        </a>
        <a href='mailto:sumitnautiyal446@gmail.com' target='_blank'>
          <MdMarkEmailRead className=' cursor-pointer hover:shadow-[#E91E63] shadow-xl ' />
        </a>
        <a href='https://www.facebook.com/sumit.nautiyal.39948' target='_blank'>
          <FaFacebookF className=' cursor-pointer hover:shadow-[#E91E63] shadow-xl ' />
        </a>
        <a href='https://www.kaggle.com/sumitnautiyal' target='_blank'>
          <SiKaggle className=' cursor-pointer  hover:shadow-[#E91E63] shadow-xl ' />
        </a>
      </div>
    </footer>
  );
}

export default Footer