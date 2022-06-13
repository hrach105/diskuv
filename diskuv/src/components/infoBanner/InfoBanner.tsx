import React from 'react'
import BannerDesc from '../banner/BannerDesc'
import Button from '../Button'


const InfoBanner = () => {
  return (
    <div className='info-banner'>
      <div className="info-banner-content">
        <BannerDesc 
          bannerTitle='Your safety is our first priority' 
          bannerDescription='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam'
          />
        <Button btnText='Join Now' btnClassName='info-banner-btn' />
      </div>
    </div>
  )
}

export default InfoBanner