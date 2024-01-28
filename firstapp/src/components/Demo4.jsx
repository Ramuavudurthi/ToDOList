import React from 'react'

const Demo4 = (props) => {
  const{name,age,mobile}=props.person
  return (
    <div>
      <h1>Name={name}</h1>
      <h2>Age={age}</h2>
      <h3>Mobile={mobile}</h3>
    </div>
  )
}

export default Demo4
