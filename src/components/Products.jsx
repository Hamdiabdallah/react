import React, { Fragment } from 'react'
import "./style.css"

function Products  ({name="no name",content1,content2}) {

  return (
    <>
      <div className='firstProduct'>
          <h1>{name}</h1>
          <h2>{content1}</h2>
          <hr />
          <h4>{content2}</h4>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cum?</p> */}
        </div>
    </>
  )
}

export default Products
