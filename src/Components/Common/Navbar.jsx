import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";
import resume from "../../assets/newmyresume.pdf";

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* web view  */}
      <nav className='md:fixed md:z-50 top-0 left-0 right-0 bg-gray-800  container md:flex md:mx-auto  md:justify-between hidden  p-6 pt-10'>
        <h1 className='cursor-pointer font-specialFont text-3xl text-[#E91E63]    shadow-2xl hover:shadow-[#E91E63] '>
          Portfolio
        </h1>

        <ul className='flex gap-5'>
          <li className='cursor-pointer hover:border-b-4 hover:border-[#E91E63]'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              Home
            </Link>
          </li>
          <li className='cursor-pointer hover:border-b-4 hover:border-[#E91E63]'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              About
            </Link>
          </li>
          <li className='cursor-pointer hover:border-b-4 hover:border-[#E91E63]'>
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}>
              Skills
            </Link>
          </li>
          <li className='cursor-pointer hover:border-b-4 hover:border-[#E91E63]'>
            <Link
              activeClass='active'
              to='project'
              spy={true}
              smooth={true}
              offset={-240}
              duration={500}>
              Projects
            </Link>
          </li>
          <li className='cursor-pointer hover:border-b-4 hover:border-[#E91E63]'>
            <Link
              activeClass='active'
              to='comments'
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}>
              Testimonials
            </Link>
          </li>
          <li className='cursor-pointer hover:border-b-4 hover:border-[#E91E63]'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to='contact'
          className='cursor-pointer text-2xl text-[#E91E63] border
          rounded-full shadow-lg hover:shadow-[#E91E63] px-6 py-1'>
          {" "}
          Hire Me
        </Link>
      </nav>
      {/* mobile view  */}
      <nav className=' p-6 container bg-gray-900  md:hidden flex justify-between '>
        <h1 className='cursor-pointer font-specialFont text-2xl text-[#E91E63]'>
          Portfolio
        </h1>
        {show ? (
          <TiThMenu
            className='text-3xl transform transition-transform duration-300 text-[#E91E63]'
            onClick={() => setShow(!show)}
          />
        ) : (
          <IoClose
            onClick={() => setShow(!show)}
            className=' text-3xl transform transition-transform duration-300 text-[#E91E63]'
          />
        )}
      </nav>
      <hr className='md:hidden border border-b-3 border-[#E91E63]' />
      <div
        className={`bg-[#20242d] absolute w-full h-[57%]  p-6 md:hidden transform transition-transform delay-200  duration-500 ease-in-out text-[#E91E63] ${
          !show ? "translate-x-0" : "-translate-x-full"
        }`}>
        <ul className='flex gap-7 flex-col'>
          <Link
            smooth={true}
            offset={50}
            duration={500}
            to='about'
            onClick={() => setShow(!show)}
            className=' cursor-pointer rounded-full px-5 hover:text-white '>
            Home
          </Link>
          <Link
            smooth={true}
            offset={-90}
            duration={500}
            to='exp'
            onClick={() => setShow(!show)}
            className=' cursor-pointer hover:text-white px-5'>
            Experience
          </Link>
          <Link
            smooth={true}
            offset={-110}
            duration={500}
            to='skills'
            onClick={() => setShow(!show)}
            className=' cursor-pointer hover:text-white px-5'>
            Skills
          </Link>
          <Link
            smooth={true}
            offset={-130}
            duration={500}
            to='project'
            onClick={() => setShow(!show)}
            className=' cursor-pointer hover:text-white px-5'>
            Projects
          </Link>
          <Link
            smooth={true}
            offset={-200}
            duration={500}
            to='comments'
            onClick={() => setShow(!show)}
            className=' cursor-pointer hover:text-white px-5'>
            Testimonials
          </Link>
          <Link
            smooth={true}
            offset={-200}
            duration={500}
            to='contact'
            onClick={() => setShow(!show)}
            className=' cursor-pointer hover:text-white px-5'>
            Contact
          </Link>
        </ul>
        <button className=' m-7 px-8 py-3 border  rounded-full shadow-lg hover:shadow-[#E91E63] hover:text-white hover:bg-[#E91E63]'>
          <a href={resume} download className=''>
            Download CV
          </a>
        </button>
      </div>
    </>
  );
};

export default Navbar;
