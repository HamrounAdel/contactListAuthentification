import React from 'react'
import './contactCard.css'
import { FaTrash, FaEdit} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {deletContact} from '../../api/ContactApi'
function ContactCard({el,getContact}) {
const navigate=useNavigate()

const handelEdite=()=>{
  navigate(`/update/${el._id}`)
}
  return (
    <div className='bodycard'>
      <article className="profile">
  <div className="profile-image">
    <img src="../image/icone1.jpg" />
  </div>
  <h2 className="profile-username">{el.name}{el.lastName}</h2>
  <small className="profile-user-handle">{el.email}</small>
  <p>Tel:{el.phone}</p>
  <div className="profile-actions">
    <button className="btn btn--primary"  >More info</button>
    <FaEdit  style={{color:'green'}} onClick={()=>handelEdite()}/>
    <FaTrash  style={{color:'red'}} onClick={async()=>{await deletContact(el._id); getContact()}}/>
  </div>
 
</article>

    </div>
  )
}

export default ContactCard
