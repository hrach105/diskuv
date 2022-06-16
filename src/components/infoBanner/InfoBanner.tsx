import React from 'react'
import BannerDesc from '../banner/BannerDesc'
import Button from '../Button'
import InforBannerSvg1 from  '../../images/info-banner-square.svg'
import InforBannerSvg2 from  '../../images/info-banner-circle.svg'
import './infoBanner.scss'


const InfoBanner = () => {
  return (
    <div className='info-banner'>
      <img src={InforBannerSvg1} alt="" />
      <img src={InforBannerSvg2} alt="" />
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