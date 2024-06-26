import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import userpic from '../assets/userr.png';
import manjot from '../assets/manjot.jpg';
import arpit from '../assets/arpit.jpg';
const Comments = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <h1 className='text-center text-3xl my-40 text-[#E91E63]'>
        Collegues Response
      </h1>
      <div
        id='comments'
        className='container max-w-[700px] h-[260px] my-8 mb-10 mx-auto shadow-lg shadow-[#E91E63] rounded-lg overflow-hidden '>
        <Carousel
          responsive={responsive}
          transitionDuration={200}
          autoPlaySpeed={1500}
          infinite={true}
          autoPlay={true}
          containerClass='carousel-container'>
          <div className='flex justify-between '>
            <div className='w-[70%] p-6'>
              <h2 className='text-3xl mb-2 text-[#E91E63]'>Rahul Rana</h2>
              <p>
                Focused, team worker and understand the problem well and try to
                analyse, give solution to that accordingly
              </p>
            </div>
            <div className='w-1/2'>
              <img
                src={userpic}
                alt='Rahul Rana'
                className='  size-full  object-cover'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-1/2 p-6'>
              <h2 className='text-3xl mb-2 text-[#E91E63]'>Manjot Singh</h2>
              <p className="">
                Sumit has been exceptional colleague with great knowledge in
                Coding languages . He has handled many projects by taking full
                ownership from start to end.
                
              </p>
            </div>
            <div className='w-1/2'>
              <img
                src={manjot}
                alt='manjot singh'
                className='size-full object-cover'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-1/2 p-6'>
              <h2 className='text-3xl mb-2 text-[#E91E63]'>Arpit</h2>
              <p>
                Sumit is a hard-working person with some really good knowledge.
                He knows when to work smart or hard. Wishing him all the best.
              </p>
            </div>
            <div className='w-1/2'>
              <img
                src={arpit}
                alt='arpit'
                className='size-full  object-cover'
              />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Comments;
