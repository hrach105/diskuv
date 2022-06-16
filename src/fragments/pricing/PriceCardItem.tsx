import { Link } from 'gatsby';
import React from 'react';
import './priceCardItem.scss'

const PriceCardItem = ({cardIcon,cardTitle,cardDesc,checkmarkIcon,serviceText,price}:any) => {
  return (
    <div className='price-card-item'>
        <div className='card-header'>
            <img src={cardIcon} alt="" />
            <h4>{cardTitle}</h4>
        </div>
        <div className="card-content">
          <p>{cardDesc}</p>
          <ul>
            <li><img src={checkmarkIcon} alt="" /> {serviceText} </li>
            <li><img src={checkmarkIcon} alt="" /> {serviceText} </li>
            <li><img src={checkmarkIcon} alt="" /> {serviceText} </li>
            <li><img src={checkmarkIcon} alt="" /> {serviceText} </li>
          </ul>
        </div>
        <div className="card-footer">
            <span className='price'>{price}</span>
            <Link to='#'>Get Started</Link>
        </div>
    </div>
  )
}

export default PriceCardItem