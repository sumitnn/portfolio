import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ufaber from "../assets/ufaber.jpg";
import technovins from "../assets/Techvins.svg";
import si from "../assets/si.jpg";

const Experience = () => {
  return (
    <>
      <h2 className='text-center text-3xl mb-10 text-[#E91E63]'>Experience</h2>
      <div
        id='exp'
        className='max-w-5xl mb-5 mx-auto shadow-[#E91E63] shadow-lg rounded-lg  flex flex-col md:flex-row '>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          transitionTime={1000}
          className='md:w-1/2 p-6'>
          <div className='md:w-full'>
            <img
              src={ufaber}
              alt='ufaber'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='md:w-full'>
            <img
              src={si}
              alt='solitare infosys'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='md:w-full'>
            <img
              src={technovins}
              alt='technovins'
              className='w-full h-full object-cover'
            />
          </div>
        </Carousel>

        <div className='md:w-1/2 p-6'>
          <p className=' mb-2'>
            <span className='text-[#E91E63]'>uFaber Edutech Pvt Lmt</span>
            <br />
            Developed and deployed dynamic web applications leveraging HTML,
            CSS, JavaScript, Bootstrap, Django, Ajax and Django REST API. •
            database configuration and proficiently executed operations
            utilizing Mongo-DB, Wasabi ,Tata-telli and AWS Lambda. • Enhanced
            code efficiency and scalability to optimize application performance.
          </p>
          <p className='mb-2'>
            <span className='text-[#E91E63]'>Solitare Infosys</span>
            <br />
            Participated in 6 month internship program focused on Python
            programming with ML and AI course in Chandigarh, effectively
            acquiring new skills and knowledge in Python
          </p>
          <p className='mb-2'>
            <span className='text-[#E91E63]'>Techvins</span>
            <br />Enhanced web applications code to optimize usability and
            efficiency, collaborating with fellow developers to leverage their
            expertise and knowledge.Developed Web Site using Tailwind,DJANGO,Fastapi,DRF,Javascipt.
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience