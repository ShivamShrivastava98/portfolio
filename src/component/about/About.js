import React from "react";
import Skill from "./Skill";

import {FaUserCircle,FaGraduationCap} from 'react-icons/fa'
import "./about.css";
import education from "./Education";
import ProfileImg from "../profile/ProfileImg";
import Navbar from "../header/Navbar";
const About = () => {
  const about=['ABOUT','ME'];
  
  return (
  <>
    <section className="about-container container-fluid">
 
      <ProfileImg name={about} />
     
      <div className="about-personal-info px-1 row ">
          <h2 className="about-box-heading mb-3">PERSONAL INFO</h2>
          <div className="col-lg-7">
            <div className="row">
        <div className="about-personal-info-heading col-lg-7 ">

              <p><b> Name: </b>Shivam Shrivastava</p>
              <p><b>Age:</b> 25</p>
              <p><b>Email:</b> Shivshrivastava350@gmail.com </p>
              <p><b>Address: </b>Gwalior, Madhya Pradesh, India</p>
            </div>
      
            <div className="col-lg-5 " >
              <p><b>Skill:</b> Full-Stack</p>
              <p><b>Experience:</b> Freshers</p>
              <p><b>Language:</b> English,Hindi</p>
            </div>
            </div>
            </div>
        <div className="about-personal-info-box  col-lg-5 ">
          <div className="row">
          <div className="text-center mx-md-3 box col-md-5 my-1" >
            <h3 className="">FRESHER</h3>
            <p>Years of Experience</p>
          </div>
          <div className="text-center box  offset-md-1   col-md-5 my-1 ">
            <h3 className="">2+</h3>
            <p>Project Completed</p>
          </div>
          </div>
        </div>
      </div>     
      <a className="btn-cv" href="https://drive.google.com/file/d/1S101vPA7JoYfOtV1uf5VtKUpy0hLaINP/view?usp=drive_link">Download CV <FaUserCircle/>
         </a>
      
        <h1 className=" heading"><span> MY</span> SKILLS</h1>
          <div className="row skill-box text-center ps-md-4" >
          {Skill.map((e)=>{
            return <>
            <div className="box skill-box-hover col-md-2 mx-md-2 mt-4 p-2">
             <img className="skill-box-icon" src={e.icon} alt={e.name} />
             <p>{e.name}</p>
            </div>
            </>
          })}          
          </div>

      <div className="">
        <h1 className="heading"><span>MY</span> EDUCATION</h1>
        < div className="gridd row ">
          {education.map((e,id)=>{
            return<>
            <div key={id} className=" col-sm-6 ">
              <div className="education1 ">
          <FaGraduationCap className="about-svg"/>
          <span>{e.year}</span>
          <h3>{e.class}</h3>
          <p>{e.school}</p>
          <p>{e.percentage}</p>
          </div>
          </div>
            </>
          })}                  
        </div>
      </div>
    </section>
      <Navbar/>
    </>
  );
};

export default About;
