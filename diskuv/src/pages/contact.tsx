import React from 'react'
import BannerDesc from '../components/banner/BannerDesc'
import Layout from '../components/Layout'
import ContactPhoneIcon from '../images/contact-phone.svg'
import ContactLocation from '../images/contact-location.svg'
import ContactEmail from '../images/contcat-email.svg'
import Form from '../components/form/Form'

const Contact = () => {
  return (
    <Layout>
      <div className="contact main-container">
        <BannerDesc bannerTitle="Don’t hesitate to contact us" bannerDescription="Lorem ipsum dolor sit amet, consetetur sadipscing" />
        <div className="social-icons">

            <div className="social-item">
              <img src={ContactPhoneIcon} alt="" />
              <span>90890-981239</span>
            </div>

            <div className="social-item">
              <img src={ContactLocation} alt="" />
              <span>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut</span>
            </div>

            <div className="social-item">
              <img src={ContactEmail} alt="" />
              <span>90890-981239</span>
            </div>
        </div>
        <div className="form-block">
          <h2>Drop us a message</h2>
            <Form />
        </div>
      </div>
    </Layout>
  )
}
export default Contact