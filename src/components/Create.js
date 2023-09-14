import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Content/API_URL.'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Create() {

  const [FirstName , setFirstName] = useState('');
  const [LastName , setLastName] = useState('');
  const [MobileNumber , setMobileNumber] = useState('');
  const navigate =useNavigate();

  const postData =async()=>{
    await axios.post(API_URL,{
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
        <Button onClick={postData}>Sumbit</Button>
      </Form>
    </div>
  )
}

export default Create;