import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

export default function List() {
const [userData,setUserData]=useState([]);
    useEffect(()=>{
    
        const data=async()=>{
       console.log(process.env.REACT_APP_HOST)
      const clientData=await axios.get(process.env.REACT_APP_HOST);
      console.log(clientData.data);
      setUserData(clientData?.data)
        } 
        data()

    },[])



  return (
    <div className='container'>
        import Table from 'react-bootstrap/Table';

    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          
        </tr>
      </thead>
      <tbody>
        {
            userData.map((data,index)=>(
                <tr key={index}>
                    <td>{data?.name}</td>
                    <td>{data?.email}</td>
                    <td>{data?.mo}</td>
                    <td>{data?.city}</td>
                </tr>
            ))
        }
      </tbody>
    </Table>
    </div>
  )
}
