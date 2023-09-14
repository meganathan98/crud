import  axios  from 'axios';
import { useEffect, useState } from 'react';
import React from 'react'
import {Button, Table} from 'react-bootstrap';
import { API_URL } from '../Content/API_URL.';
import {  useNavigate } from 'react-router-dom';

function Read() {
   const [apiData, setapiData] = useState([]);
   const navigate =useNavigate();

   const handleclick=()=>{
    navigate('/')
   }

   const updateuser =({FirstName,LastName,MobileNumber,id})=>{
     localStorage.setItem('id',id)
    localStorage.setItem('FirstName',FirstName)
    localStorage.setItem('LastName',LastName)
    localStorage.setItem('MobileNumber',MobileNumber)
    navigate('/Update')

   }

   const deleteuser = async (id) => {
   
     axios.delete(API_URL + id )
     callgetApi()

   }

   const callgetApi = async() =>{
      const resp = await axios.get(API_URL);
      setapiData(resp.data);
   }

   useEffect(()=>{
     callgetApi();
   }, [] );



     return (
    <div> 
         <Table striped bordered hover>
      <thead>1111111
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
          <th>Delete User</th>
          <th>Update User</th>
        </tr>
      </thead>
      <tbody>
           
           {
             apiData.map (data=> (
              <tr key= {data.id}>
                 
               <td>{data.FirstName}</td>
               <td>{data.LastName}</td>
               <td>{data.MobileNumber}</td>
               <td>
                <Button onClick={()=>deleteuser(data.id)}>
                  Remove
                </Button>
               </td>
               <td>
                <Button onClick={()=>updateuser(data)}>
                  Update
                </Button>
               </td>
              </tr>
             )
             )
           }
       
      </tbody>
    </Table>
    <div>
      <Button onClick={handleclick}>Back</Button>
    </div>
   
    </div>
  );
  
}

export default Read