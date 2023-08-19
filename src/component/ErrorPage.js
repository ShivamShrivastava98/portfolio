import React from 'react'
import pageNotFound from '../images/404.png';

const ErrorPage = () => {
  return (
    <div className='vh-100 text-center'>
        {/* <Particles/> */}
        <h1 className='text-white'>Page Not Found </h1>
        <img className="h-75 " src={pageNotFound} alt="N/A" />
    </div>
  )
}

export default ErrorPage