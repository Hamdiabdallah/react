import React from 'react'
import { useState } from 'react'

const MyInput = () => {
  const [value,setvalue]= useState({name: "", email: "",age:"",gender :"",text:"",verifStudent:false,sex:"",optionn:""});
  // const [valuee,setvaluee]= useState('');
  // function valueInput(event){
  //   setvalue(event.target.value)
  function checked(event){
    setvalue({...value,verifStudent:event.target.checked})
  }
  // }
  return (
    <form style={{width : '500px',border : 'red 1px'}}  >
      <label >Your Name</label>
      <input value={value.name} onChange={(event)=> setvalue({...value,name: event.target.value})} /><hr />
      <label >Email</label>
      <input value={value.email} onChange={(event)=> setvalue({...value,email: event.target.value})} /> <hr />
      <label >Age</label>
      <input type="number" value={value.age} onChange={(event)=> setvalue({...value,age: event.target.value})} /> <hr />
      <label >Gender</label>
      <input value={value.gender} onChange={(event) => setvalue({...value,gender:event.target.value})}/> <hr />
      <textarea onChange={(event)=> setvalue({...value,text: event.target.value})}>{value.text}</textarea> <hr />
      <label >are you student</label>
      <input type="checkbox"  checked={value.verifStudent} onChange={checked} /> <hr />
      <label>General info </label>
      <select value={value.sex} onChange={(event)=> setvalue({...value,sex: event.target.value})} >
        <option >male</option>
        <option >female</option>
        <option >other</option>
      </select> <hr />
      
      <div>
      <label >Student</label>
      <input type="radio" value={"Student"} checked={value.optionn == "Student"} onChange={(event)=> setvalue({...value,optionn:event.target.value})} />
      <label >Teacher</label>
      <input type="radio"  value={"Teacher"}  checked={value.optionn == "Teacher"} onChange={(event)=> setvalue({...value,optionn:event.target.value})}/>
      </div>
      <input type="checkbox" name="" id="" />
      <input type="radio" name="" id="" />
      <button>Submit</button>
    </form>
  )
}

export default MyInput
