import React from 'react'
import { useState } from 'react'

const MyInput = () => {
  const [value,setvalue]= useState({name: "", email: ""});
  // const [valuee,setvaluee]= useState('');
  // function valueInput(event){
  //   setvalue(event.target.value)
  // }
  return (
    <form style={{width : '500px',border : 'red 1px'}} >
      <label >Your Name</label>
      <input value={value.name} onChange={(event)=> setvalue({...value,name: event.target.value})} /><hr />
      <label >Email</label>
      <input value={value.email} onChange={(event)=> setvalue({...value,email: event.target.value})} /> <hr />
      <button>Submit</button>
    </form>
  )
}

export default MyInput
