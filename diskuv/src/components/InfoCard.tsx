import React from 'react'

const InfoCard = ({cardImg, cardTitle, cardText}) => {
  return (
    <div className='card-item'>
        <img src={cardImg} alt="" />
        <h2>{cardTitle}</h2>
        <p>{cardText}</p>
    </div>
  )
}

export default InfoCard