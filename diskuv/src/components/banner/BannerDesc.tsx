import React from 'react'
import Button from '../Button'

const BannerDesc = ({bannerTitle,bannerDescription,children}) => {
  return (
    <div className='banner-desc'>
        <h1>{bannerTitle}</h1>
        <p>{bannerDescription}</p>
        {children}
    </div>
  )
}

export default BannerDesc