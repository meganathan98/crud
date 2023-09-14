import {useState ,useEffect } from "react"
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { API_URL } from '../Content/API_URL.';
import  axios  from 'axios';


function  Update() {
  const [id , setId] = useState('');
  const [FirstName , setFirstName] = useState('');
  const [LastName , setLastName] = useState('');
  const [MobileNumber , setMobileNumber] = useState('');
  const navigate=useNavigate()

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('FirstName'))
    setLastName(localStorage.getItem('LastName'))
    setMobileNumber(localStorage.getItem('MobileNumber'))
  },[])


  const postData =async()=>{
    await axios.put (API_URL+id, {
    FirstName,
    LastName,
    MobileNumber
   })

   navigate('/Read');
  }

  return (
    <div> 
       <Form className='form-control'>
        <label >First Name:</label>
        <input value={FirstName} onChange={(event)=>setFirstName(event.target.value)} placeholder='Enter your first name'/> <br/>
        
        <label>Last Name:</label>
        <input value={LastName} onChange={(event)=>setLastName(event.target.value)} placeholder='Enter your Last name'/> <br/>

        <label>Mobile Number:</label>
        <input value={MobileNumber} onChange={(event)=>setMobileNumber(event.target.value)} placeholder='Enter your mobile number'required/>  <br/>
        <Button onClick={postData}>Update</Button>
      </Form>
    
    </div>
  )
}

export default  Update;