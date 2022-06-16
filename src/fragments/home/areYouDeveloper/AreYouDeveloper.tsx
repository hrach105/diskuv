import { Link } from 'gatsby'
import React from 'react'
import BannerDesc from '../../../components/banner/BannerDesc';
import NotebookImg  from '../../../images/notebook.png'
import MobileImg  from '../../../images/full-notebook.png'
import './areYouDeveloper.scss'

const AreYouDeveloper = () => {
  return (
    <div className='section-inner'>
       <div className='section-inner-desc'>
        <BannerDesc bannerTitle="Are you a developer?" bannerDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd" />
            <div className='banner-links'>
                <Link to='/products/diskuvSDK'>Diskuv Ocaml</Link> 
                <Link to='/products/diskuvOcaml'>Diskuv Ocaml</Link>
            </div>
       </div>
       <div className="banner-image">
        <img src={NotebookImg} alt="" />
        <img className='mobile-img' hidden src={MobileImg} alt="" />
       </div>
    </div>
  )
}

export default AreYouDeveloper