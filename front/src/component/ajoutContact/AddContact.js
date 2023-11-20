import React from 'react'
import './AddContact.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {addContact} from '../../api/ContactApi'
import Navigation from '../navbar/Navigation'
import { useSelector } from 'react-redux'

function AddContact() {
  const auth = useSelector(state => state.Auth)
const navigate=useNavigate()
const[name,setName]=useState('')
const[lastName,setLastName]=useState('')
const[email,setEmail]=useState('')
const[note,setNote]=useState('')
const[phone,setPhone]=useState('')

const handelAdd=async(value)=>{
  await addContact(value)
  navigate('/contact')
}


  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
    <Navigation auth={auth} logout={logout} />
    <div className='bodyadd'>
      
    <div className="container ">
      
  <div className="text">Add new contact</div>
  <form action="#">
    <div className="form-row">
    
      <div className="input-data">
        <input type="text" required="true" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}/>
        <div className="underline" />
        <label htmlFor="">First Name</label>
      </div>
      <div className="input-data">
        <input type="text" required="true"
        value={lastName} 
        onChange={(e)=>setLastName(e.target.value)}/>
        <div className="underline" />
        <label htmlFor="">Last Name</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="text" required="true" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <div className="underline" />
        <label htmlFor="">Email Address</label>
      </div>
      <div className="input-data">
        <input type="text" required="true"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)} />
        <div className="underline" />
        <label htmlFor="">Phone</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data textarea">
        <textarea rows={8} cols={80} required="" defaultValue={""} 
        value={note}
        onChange={(e)=>setNote(e.target.value)}/>
        <br />
        <div className="underline" />
        <label htmlFor="">Write your note</label>
        <br />
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner" />
            <input type="button" defaultValue="Ajout Contact"
             onClick={()=>handelAdd({name,lastName,email,phone,note})}/>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
</div>
</>
  )
}

export default AddContact
