import React,{useState} from 'react'
import '../ajoutContact/AddContact.css'
import { useNavigate,useParams } from 'react-router-dom'
import {putContact} from '../../api/ContactApi'
function UpdatContact() {
  const navigate=useNavigate()
  const {id}=useParams()
const[name,setName]=useState('')
const[lastName,setLastName]=useState('')
const[email,setEmail]=useState('')
const[note,setNote]=useState('')
const[phone,setPhone]=useState('')

const handelupdate=async(id,value)=>{
 await putContact(id,value)
 navigate('/contact')
}
  return (
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
            <input type="button" defaultValue="modifier Contact"
             onClick={()=>handelupdate(id,{name,lastName,email,phone,note})}/>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
</div>
  )
}

export default UpdatContact
