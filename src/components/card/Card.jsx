import React from 'react'
import './card.scss'
import Column from '../../assets/svg/column.svg';
const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={Column} alt="column" />
        <div className='card'>
            <div>
                <span>{props.title}</span>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card