import React from 'react';
import './home.css';
import Luffy from '../../images/luffy.webp';
import { BsFileEarmarkCode} from "react-icons/bs";
import Navbar from '../header/Navbar';
const  Home = () => {
  return (    
  <>
    <section className='container-fluid p-start-0'>
    <div className='home-container row pt-4'>
      <div className='home-img-container col-md-5'>
        <img className='' src={Luffy} alt="img" />
      </div>
      <div className='home-detail-container offset-md-1 col-md-6 mb-5'>
        <BsFileEarmarkCode className='home-icons'/>
        <h1>Hi, I am Shivam Shrivastava</h1>
        <h2>Full Stack Developer</h2>
        <p className='pb-3 '>I am a Full Stack Developer From Gwalior,Madhya Pradesh,India. I have a 
          passion for Design and Love for Web Development. </p>
       </div>       
    </div>    
    </section>
  <Navbar/>
    </>
  )
}
export default Home