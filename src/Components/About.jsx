import red from '../assets/red.png';
import { ReactTyped } from "react-typed";
import resume from '../assets/newmyresume.pdf';
import { Link } from "react-scroll";
const About = () => {
  return (
    <>
      <main
        id='about'
        className='container h-screen grid  md:grid-cols-2 md:items-center mx-auto mb-7'>
        <div className='flex gap-6 flex-col items-start p-6 '>
          <div className='text-2xl leading-relaxed'>
            <p className='text-2xl'>
              Hello ,<span className=' text-[#E91E63]'> my name is</span>
            </p>
            <p>
              <span className=' text-[#E91E63] '> Sumit </span>
              Nautiyal
            </p>
          </div>

          <p className=' text-2xl  text-[#E91E63]'>
            I am {""}
            <ReactTyped
              className='text-[#f1f1f1]'
              strings={[
                "Python Developer",
                "Full Stack Developer",
                "Backend Developer",
                "Django Developer",
              ]}
              typeSpeed={40}
              loop={true}
              showCursor={true}
              backSpeed={40}
            />
          </p>

          <p className=' text-lg font-bold hover:text-[#E91E63]'>
            With <span className='text-[#E91E63]'>3+ years</span> of Full Stack
            and Backend development experience, I am skilled in Python, Django,
            MySQL, MongoDB, JavaScript, and React.js. I excel in creating
            scalable web applications, optimizing performance and developing
            robust backends and intuitive front-ends. Here I'm with my skills in
            various technology, you can scroll below for more info or click on
            the below button to {" "}
            <span className='text-[#E91E63] cursor-pointer'>
              <a href={resume} download>download </a>
            </span>
            the Resume.
          </p>
          <div className='flex gap-3'>
            <a
              href={resume}
              download
              className=' border border-[#E91E63]  shadow-2xl hover:shadow-[#E91E63] hover:text-[#E91E63] px-5 py-3 rounded-full'>
              Download CV
            </a>
            <Link
              to='skills'
              className='border border-[#E91E63] px-10 py-3 rounded-full shadow-2xl hover:shadow-[#E91E63] hover:text-[#E91E63]'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              {" "}
              Skills
            </Link>
          </div>
        </div>

        <div className=' flex justify-center items-center '>
          <img src={red} className='hover:shadow-2xl hover:shadow-[#E91E63]' />
        </div>
      </main>
    </>
  );
}

export default About