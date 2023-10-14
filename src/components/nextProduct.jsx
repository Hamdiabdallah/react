

import React, { useState } from 'react'
import './style.css'
function NextProduct({children}) {
  const [name,setname] = useState("hamdi")
  function test(){
    if (name == "hamdi"){
      setname("abdallah")
    }else{
      setname("hamdi")
    }
    
  }
  return (
    <div style={{margin: '10px 20px',width: '150px'}}>
      
        <button className='btm' onClick={test}>{name}</button>
        
      </div>
    
  )
}

export default NextProduct
