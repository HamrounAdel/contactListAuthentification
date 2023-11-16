import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import {registerUser} from '../../api/authapi'
function Register() {
  const navigate = useNavigate()
  const [name,setName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handelregister=async(value)=>{
    await registerUser(value)
  navigate('/')
  
  }
  return (
    <div className='bodylogin'>
    <div className="form-wrapper">
  <h1>Create Account</h1>
  <form>
  <div className="form-item">
      <label htmlFor="name" />
      <input
        type="text"
        name="name"
        required="required"
        placeholder="First name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
    <div className="form-item">
      <label htmlFor="lastName" />
      <input
        type="text"
        name="lastName"
        required="required"
        placeholder="last name"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
      />
    </div>
    <div className="form-item">
      <label htmlFor="email" />
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Email Address"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="form-item">
      <label htmlFor="password" />
      <input
        type="password"
        name="password"
        required="required"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div className="button-panel">
      <input
        type="button"
        className="button"
        title="Register"
        defaultValue="Register"
        onClick={()=>handelregister({name,lastName,email,password})}
      />
    </div>
  </form>
  
</div>

  </div>
  )
}

export default Register
