import React, { useState } from 'react'

const Welcom = () => {

    const[name,setName]=useState("")

    function username(event){
        setName(event.target.value)
    }
  return (
    <div>
      <h1 className='text-red-500 text-2xl font-semibold'>Hello,{name}</h1>
      <input type="text" placeholder='Write Something..' onChange={username} classNamme='border border-2 border-black'/>
    </div>
  )
}

export default Welcom
