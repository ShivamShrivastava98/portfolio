import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Icons = () => {
  return (
    <div className='contact-share py-3'>
    <a href='https://www.facebook.com/shivam.shrivastava.754703'><FaFacebookF/></a>
    <a href='https://www.instagram.com/asgro_shiv98/'><BsInstagram/></a>
    <a href='https://github.com/ShivamShrivastava98/'><BsGithub/></a>
    <a href='https://www.linkedin.com/in/shivam-shrivastava-ab155125b/'><AiFillLinkedin/></a>
        </div> 
  )
}

export default Icons