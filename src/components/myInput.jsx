import React from 'react'
import { useState } from 'react'

const MyInput = () => {
  const [value,setvalue]= useState('');
  function valueInput(event){
    setvalue(event.target.value)
  }
  return (
    <div>
      <label >Your Name</label>
      <input value={value} onChange={valueInput} />
    </div>
  )
}

export default MyInput
