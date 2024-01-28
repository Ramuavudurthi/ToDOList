import React from 'react'
import { useState } from 'react'
const Statehook = () => {
    const[city, setCity]=useState("hyderabad")
    const updateCity=()=>{
      setCity('Karimnagar')
    }
    const updateCity1=()=>{
      setCity('Hyderabad')
    }
   
  return (
    <div>
      <h1>{city}</h1>
      <button onClick={updateCity}>Update</button>
      <button onClick={updateCity1}>Rollback</button>
    </div>
  )
}

export default Statehook
