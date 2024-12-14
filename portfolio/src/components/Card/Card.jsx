// import React from 'react'
import './Card.css'

// eslint-disable-next-line react/prop-types
const SkillsCard = ({image, title}) => {
  return (
    <div className='card'>
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="hovercard" />
        </div>
    </div>
  )
} 

export default SkillsCard