import React from 'react'
import { useState } from 'react'
const Demo = () => {
     const[Age,setAge]=useState("18")
    const res="Loading..."
     function verify(){
        if(Age==='18'){
            const res=setAge('You are Eligible for Voting');
        }else{
            const res=setAge('You are not eligible for Voting!');
            
        }
     }
  return (
    <div>
      <button onClick={verify}>Verify Age</button>
      <h1>{res}</h1>
    </div>
  )
}

export default Demo
