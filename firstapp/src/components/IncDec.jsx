import React from 'react'
import { useState } from 'react'
const IncDec = () => {

const[number,setNumber]=useState(0);

const increment=()=>{
    setNumber(number+1);
}
const decrement=()=>{
  if(number>1){
    setNumber(number-1);
  }
    
}
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default IncDec
