import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/javascript.png'
import django from '../assets/django.png'
import ds from '../assets/datascience.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import flask from '../assets/flask.png'
import jquery from '../assets/jquery.png'
import dbms from '../assets/dbms.png'
import fastapi from '../assets/fastapi.png'
import react from '../assets/react.png'
const Skills = () => {
  return (
    <>
      <h2 className='text-center text-3xl mt-40  text-[#E91E63]'>Skills</h2>
      <div
        id='skills'
        className=' container max-w-[80%] mx-auto mb-10 grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-8 p-5'>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={css} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={html} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={js} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={jquery} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={fastapi} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={django} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={ds} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={dbms} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={flask} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={tailwind} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={bootstrap} className=' object-center' />
        </div>
        <div className=' hover:shadow-lg hover:shadow-[#E91E63] size-20 md:size-24 '>
          <img src={react} className=' object-center' />
        </div>
      </div>
    </>
  );
}

export default Skills