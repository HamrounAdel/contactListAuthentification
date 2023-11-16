import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const navigate =useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
  
 const submitLogin=async(values)=>{
    const res = await axios.post('http://localhost:5002/auth/login',values)
    await console.log('reponse login', res.data.token)
  await localStorage.setItem('token',res.data.token)
  navigate('/home')
  }

  return (
    <div className='bodylogin'>
    <div className="form-wrapper">
  <h1>Sign In</h1>
  <form>
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
        title="Sign In"
        defaultValue="Sign In"
        onClick={()=>submitLogin({email,password})}
      />
    </div>
  </form>
  <div className="form-footer">
    <p>
      <a href="/" >Create an account</a>
    </p>
    <p>
      <a href="#">Forgot password?</a>
    </p>
  </div>
</div>

  </div>
  )
}

export default Login
