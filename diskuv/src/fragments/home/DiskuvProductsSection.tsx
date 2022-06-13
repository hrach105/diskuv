import React,{useState} from 'react'
import BannerDesc from '../../components/banner/BannerDesc'
import './DiskuvProductsSection.scss'
import IphoneImg from '../../images/iphone.png'

const DiskuvProductsSection = () => {
    const [tabs,setTabs] = useState(1)
  return (
        <div className="diskuv-section">
            <div className={`tabs ${tabs === 2 ? 'active' :''}`} >
                <ul>
                    <li onClick={ ()=> setTabs(1)} className={ tabs===1 ?'active' : ''}>Diskuv Communicator</li>
                    <li onClick={ ()=> setTabs(2)} className={ tabs===2 ?'active' : ''}>Diskuv Sanctuary</li>
                </ul>
            </div>
            <div className="section-img">
                <img src={IphoneImg} alt="" />
            </div>
            {
                tabs === 1 ? (
                    <BannerDesc 
                        bannerTitle="A messaging application like no other" 
                        bannerDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
                    />
                ) : tabs === 2? (
                 <BannerDesc 
                    bannerTitle="A secure way to connect with your loved ones" 
                    bannerDescription="ksfdkdshgfkdolomy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
                /> 
                ) : null
            }
            
        </div>
  )
}

export default DiskuvProductsSection