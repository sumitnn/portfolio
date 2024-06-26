

const Contact = () => {
  return (
    <div
      id='contact'
      className=' container max-w-[900px] mt-52 mx-auto shadow-lg shadow-[#E91E63] rounded-lg '>
      <div className='px-6 py-4'>
        <div className='text-3xl mb-2 text-[#E91E63]'>Contact Information</div>

        <br />
        <p className=' '>
          <span className='text-[#E91E63]'>Phone:</span>
          <a href='tel:7018494661' target='_blank' className="pl-3">
            +91 70184-94661
          </a>
        </p>
        <p className=''>
          <span className='text-[#E91E63]'>Email:</span>
          <a href='mailto:sumitnautiyal446@gmail.com' target='_blank' className="pl-3">
            
            sumitnautiyal446@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact