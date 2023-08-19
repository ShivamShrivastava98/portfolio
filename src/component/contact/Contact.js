import React from 'react'
import ProfileImg from '../profile/ProfileImg'
import './contact.css'
import ContactDetailBox from './ContactDetailBox'
import Icons from './Icons'
import Emailjs from 'emailjs-com'
import Navbar from '../header/Navbar'
const Contact = () => {
  const name=['Contact','Me'];
  const sendMail=(e)=>{
    e.preventDefault();
    Emailjs.sendForm('service_6mpoaje','template_4xffujd',e.target,"CwV6eRia-2DWKbTQ0").then(res=>{
      console.log(res)
    }).catch(err=>{console.log(err);})
  }
  return (
<>
    <section className='contact-container container-fluid'>
      <ProfileImg name={name}/>
      <div className=' contact-content-container row'>
      <div className='contact-info col-lg-5'>
      <h1>GET IN TOUCH</h1>
      <p>I Like To Keep It Simple.My Goals Are To Focus On Typography,
        Content And Conveying The Message That You Want To Send.</p>
        <div className='contact-detail'>
        <ContactDetailBox/>     
        <Icons/>
        </div>
      </div>  
      <div className='contact-mail col-lg-7 py-5'>
        <form action="" className='contact-form container ' onSubmit={sendMail}>
          <div className='row'>
          <input type="text" className='col-lg-6' placeholder='your name' name='name' />
          <input type="number" className='col-lg-6'placeholder='your number' name='number' />
          </div> 
          <div className='row '>
          <input type="email"className='col-lg-6' placeholder='your email' name='user-email' />
          <input type="text"className='col-lg-6' placeholder='your subject' name='subject' />  
          </div>    
          <div className='row mt-3'>
          <textarea className='col-md-12'  name="message" id="" cols="30" rows="10" placeholder='your message'></textarea>
          </div>    
          <button  type='submit' value="send">Send Message</button>
        </form>
      </div>
      </div>
    </section>
      <Navbar/>
    </>
  )
}

export default Contact