import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { FaHome,FaUser,FaAddressBook,FaBriefcase} from "react-icons/fa";
import './navbar.css'
const Navbar = () => {
 
  return (

    <nav className='navbars container-fluid'>
        <div className='navbar-link-container row pl-0'>
            <Link className='col-3 navbar-link'  to="/home">         
            <FaHome/><h3>Home</h3>
            </Link>
            <Link className='col-3 navbar-link' to="/contact">          
            <FaAddressBook/><h3>Contact</h3>
            </Link>
            <Link className='col-3 navbar-link' to="/about">
           <FaUser/><h3 >About Me</h3>
           </Link>
           <Link className='col-3 navbar-link' to="/projects"> 
          <FaBriefcase/><h3 >Projects</h3>
          </Link>
        </div>
    </nav>   
 
  )
}

export default Navbar