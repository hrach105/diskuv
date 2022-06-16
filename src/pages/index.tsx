import * as React from "react"
import Banner from "../components/banner/Banner"
import BannerDesc from "../components/banner/BannerDesc"
import Button from "../components/Button"
import InfoCard from "../components/InfoCard"
import Layout from "../components/Layout"
import DiskuvProductsSection from "../fragments/home/DiskuvProductsSection"
import BannerImg from '../images/banner-img.png'
import LockIcon from '../images/icon1.png'
import EyeIcon from '../images/icon2.png'
import PhoneIcon from '../images/icon3.png'
import Map from '../components/map/map'
import AreYouDeveloper from "../fragments/home/areYouDeveloper/AreYouDeveloper"
import Post from "../components/post/Post"
import InfoBanner from "../components/infoBanner/InfoBanner"


const IndexPage = () => {
  return (
    <Layout layoutClassName={'changer-layout'}>
      <Banner bannerContent={
        <div className="main-container">
            <div className="banner-inner">
              <BannerDesc 
                bannerTitle={'Communicate without anyone spying!'}
                bannerDescription={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd'}
              >
               <Button  btnText="Join Diskuv Now" btnClassName={'banner-desc-btn'} />
              
              </BannerDesc>
              <img src={BannerImg} alt="" />
            </div>
        </div>
      } />
     <div className="main-container">
      <div className="cards">
            <InfoCard cardImg={LockIcon} cardTitle="Highest Security Ever" cardText="Lorem ipsum dolor sit amet, consetetur sadipscing" />
            <InfoCard  cardImg={EyeIcon} cardTitle="No Spying" cardText={"Lorem ipsum dolor sit amet, consetetur sadipscing"} />
            <InfoCard cardImg={PhoneIcon} cardTitle="No Phone Number" cardText="Lorem ipsum dolor sit amet, consetetur sadipscing" />
        </div>
     </div>
     <DiskuvProductsSection />
     <div className="map">
        <Map 
          mapTitle="Feel connected to the world without any concern!" 
          mapDesc="Lorem ipsum dolor sit amet, consetetur sadipscing"
        />
     </div>
     <div className="are-you-dev">
        <AreYouDeveloper />
     </div>
      <InfoBanner/>
     <Post />
    </Layout>
  )
}

export default IndexPage
