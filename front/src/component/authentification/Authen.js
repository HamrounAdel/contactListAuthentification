import React from 'react'
import {setAuth} from '../../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getAccount} from '../../api/authapi'
import Admin from './Admin'
import Users from './Users'
import Login from '../login/Login'
import Navigation from '../navbar/Navigation'
function Authen() {
  const auth = useSelector(state=>state.Auth)
  console.log('auth =>', auth)

const dispatch = useDispatch()
const navigate = useNavigate()
const getAcc=async()=>{
  const data = await getAccount()
  console.log('data login', data)
  
  dispatch(setAuth(data))
}

useEffect(()=>{
  getAcc()
},[])

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/')
}

const token = localStorage.getItem('token')

  return (
    <div>
     
      {
token ? (<><Navigation auth={auth} logout={logout}   />
{
  auth.role === "admin" ?  <Admin/> : <Users/> 

}</>):(<Login/>)
      }
    </div>
  )
}

export default Authen
