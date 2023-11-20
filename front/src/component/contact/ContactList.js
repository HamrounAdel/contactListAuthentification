import React from 'react'
import ContactCard from './ContactCard'
import {useSelector,useDispatch}from 'react-redux'
import { getAllContact} from '../../api/ContactApi'
import {setContact} from '../../redux/contactSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../navbar/Navigation'
function ContactList() {
  const contact =useSelector(state=>state.Contact)
  const dispatch = useDispatch()
  const auth = useSelector(state => state.Auth)
const navigate=useNavigate()
const getContact = async()=>
   {  const data = await getAllContact()
      dispatch(setContact(data.getall))
  }

useEffect(()=>{
  getContact()
},[])

const logout = () => {
  localStorage.removeItem('token')
  navigate('/')
}

  return (
    <>
    <Navigation auth={auth} logout={logout} />
    <div>
      {contact.map(el=><ContactCard el={el} getContact={getContact} />)}
     
    </div>
    </>
  )
}

export default ContactList
