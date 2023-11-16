import React from 'react'
import ContactCard from './ContactCard'
import {useSelector,useDispatch}from 'react-redux'
import { getAllContact} from '../../api/ContactApi'
import {setContact} from '../../redux/contactSlice'
import { useEffect } from 'react'

function ContactList() {
  const contact =useSelector(state=>state.Contact)
  const dispatch = useDispatch()

const getContact = async()=>
   {  const data = await getAllContact()
      dispatch(setContact(data.getall))
  }

useEffect(()=>{
  getContact()
},[])

  return (
    <div>
      {contact.map(el=><ContactCard el={el} getContact={getContact} />)}
     
    </div>
  )
}

export default ContactList
