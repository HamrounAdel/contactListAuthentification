import React from 'react'
import './homepage.css'

import Navigation from '../navbar/Navigation'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate()
  const auth = useSelector(state => state.Auth)

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/auth')
  }

  return (
    <>
      <Navigation auth={auth} logout={logout} />
    <div className="banner-area">
    
        
    
  </div>
  </>
  )
}

export default Homepage
