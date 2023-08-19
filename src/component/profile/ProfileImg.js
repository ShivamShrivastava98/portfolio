import React from 'react'
import './profileImg.css'
import Luffy from '../../images/luffy.webp'
const ProfileImg = (props) => {
    console.log(props.name);
  return (
    <div className='profile-img-container row'>
        <h1>{props.name[0]} <span> {props.name[1]}</span></h1>
        <div className='profile-img'>        
        <img src={Luffy} alt="img" />
        </div>
    </div>
  )
}

export default ProfileImg