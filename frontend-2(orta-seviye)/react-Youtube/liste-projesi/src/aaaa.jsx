import React from 'react'
import "./index.css"

function MEAL({yemek}) {
    const {id,title,description,price,link,image}=yemek

  return (
    <div >
        <div className='meal-sp'>
            <img   src={image} alt="" />
            <h4 >{title}</h4>
            <h5>{description}</h5>
            <h3>{price} TL</h3>
            <a href={link} target=  "_blank">Watch how to make it</a>
        </div>
        
    </div>
  )
}

export default MEAL