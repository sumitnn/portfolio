
import dj from "../assets/django.png";
import react from "../assets/react.png";
import ds from "../assets/datascience.png";
const Projects = () => {
  return (
    <>
      <h2 className='text-center text-3xl my-20 text-[#E91E63]'>Projects</h2>
      <div
        id='project'
        className=' container max-w-[80%] mx-auto mb-10 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 p-4'>
        <div className=''>
          <a
            href='https://github.com/sumitnn/Django-Project-Management-System-Advanced'
            target='_blank'
            className=''>
            <img src={dj} className=' object-cover size-40' />
            <div>
              <p className='text-center mt-2'>File Mangement System</p>
            </div>
          </a>
        </div>
        <div className=''>
          <a
            href='https://github.com/sumitnn/Django-Project-Management-System-Advanced'
            target='_blank'
            className=''>
            <img src={react} className=' object-cover size-40' />
            <div>
              <p className='text-center mt-2'>News Website </p>
            </div>
          </a>
        </div>
        <div className=''>
          <a
            href='https://github.com/sumitnn/Instagram-Clone-Django-'
            target='_blank'
            className=''>
            <img src={dj} className=' object-cover size-40' />
            <div>
              <p className='text-center mt-2'>Instagram Clone </p>
            </div>
          </a>
        </div>
        <div className=''>
          <a
            href='https://github.com/sumitnn/React-Ecommerce'
            target='_blank'
            className=''>
            <img src={react} className=' object-cover size-40' />
            <div>
              <p className='text-center mt-2'>Ecommerce Store </p>
            </div>
          </a>
        </div>
        <div className=''>
          <a
            href='https://github.com/sumitnn/Heart-Disease-Prediction-With-Django'
            target='_blank'
            className=''>
            <img src={ds} className=' object-cover size-40' />
            <div>
              <p className='text-center mt-2'>Ai Project </p>
            </div>
          </a>
        </div>
      </div>
      <h3 className='text-center mt-3 text-2xl md:text-3xl'> Live Project Url Added Soon...</h3>
    </>
  );
}

export default Projects