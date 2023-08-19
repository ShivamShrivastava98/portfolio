import React from 'react'
import Api from './Api'
import './projects.css'
import Navbar from '../header/Navbar';
const Projects = () => {  
  return (   
    <div className='container-fluid '>
    <div className='projects-container row'>      
    <h1 className='text-center text-light'><span>MY</span>PROJECTS</h1>
    {Api.map((no)=>{
     return<>
      <div key={no.id} className='project-box  col-md-5 mx-md-4' style={{backgroundImage:`url(${no.bg})`}}>       
        <div className='hiddenbox'>
        <h2 className='text-center h-50 fs-1'>{no.name}</h2>
        <div className='d-flex'>
        <a href={no.link} className='btn btn-color col-lg-5 mx-lg-3 p-3 my-1'>Code</a>
        {/* <button className='btn  btn-color col-lg-5 my-1'>{no.description}</button>  */}
        </div>
        </div>
      </div>
      </>
  })}
  <Navbar/>
    </div>    
    </div>
  )
}

export default Projects