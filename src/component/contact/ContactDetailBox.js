import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdLocationOn ,MdEmail} from 'react-icons/md'
const ContactDetail =[
    {icon:<MdLocationOn/>,title:"Address:",content:"Gwalior,Madhya Pradesh,India 474001"},
    {icon:<MdEmail/>,title:"email:",content:"shrivastavashivam560@gmail.com"},
    {icon:<BsFillTelephoneFill/>,title:"phone:",content:"+91 6263833027"},
]


const ContactDetailBox= () => {
    
  return <>
    {ContactDetail.map((e)=>{
        const {icon,title,content}=e;
        return<>
         <div className='contact-detail-box'>
         <span className='contact-icons'>{icon}</span>
         <div>
           <h2>{title}</h2>
         <p>{content}</p>
         </div>
       </div>
         </>
       })}
  </>
}

export default ContactDetailBox