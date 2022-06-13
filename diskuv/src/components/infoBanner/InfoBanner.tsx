import React from 'react'
import BannerDesc from '../banner/BannerDesc'
import Button from '../Button'
import InfoBannerSvg1 from  '../../images/info-banner-square.svg'
import InfoBannerSvg2 from  '../../images/info-banner-circle.svg'
import './infoBanner.scss'


const InfoBanner = () => {
  return (
    <div className='info-banner'>
      <img src={InfoBannerSvg1} alt="" />
      <img src={InfoBannerSvg2} alt="" />
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