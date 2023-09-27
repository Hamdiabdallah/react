

import React from 'react'
import './style.css'
function NextProduct({children}) {
  return (
    <div style={{margin: '10px 20px'}}>
      
        <button className='btm'>{children}</button>
        
      </div>
    
  )
}

export default NextProduct
