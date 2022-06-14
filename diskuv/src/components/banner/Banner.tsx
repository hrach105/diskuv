import React from 'react'
import './banner.scss'
const Banner = ({ bannerContent }:any):any => {
  return (
    <div className='banner'>
        {bannerContent}
    </div>
  )
}

export default Banner