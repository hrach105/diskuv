import React from 'react'
import './banner.scss'
const Banner = ({ bannerContent }) => {
  return (
    <div className='banner'>
        {bannerContent}
    </div>
  )
}

export default Banner