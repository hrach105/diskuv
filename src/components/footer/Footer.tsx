import React from 'react'
import {Link} from 'gatsby'
import Logo from '../../images/logo.png';
import './footer.scss'
import { footerLinks } from './constant';


const Footer = () => {
  return (
    <footer>
        <div className="main-container ">
          <div className='footer-inner'>
            <div className="footer-left-side">
              <div className="logo">
              <Link to='/'>
                  <img src={Logo} alt="" />
              </Link>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus accusamus, iste reiciendis odio officiis recusandae? Corporis vero a molestias! Optio minus aliquid harum reprehenderit! Reiciendis autem pariatur aut quod!</p>
            </div>
            <div className="footer-right-side">
                <div className="footer_link">
                 <div>
                  <h3>Products</h3>
                  <ul>
                    {
                      footerLinks.slice(0,4).map((link,index)=> {
                        return (
                          <li 
                            key={index}>
                            <Link to={link.path}>{link.linkTitle}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                 </div>
                 <div>
                  <h3>Quick Links</h3>
                  <ul>
                    {
                      footerLinks.slice(4,9).map((link,index)=> {
                        return (
                          <li 
                            key={index}>
                            <Link to={link.path}>{link.linkTitle}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                 </div>
                 <div>
                  <h3>Support</h3>
                  <ul>
                    {
                      footerLinks.slice(9,11).map((link,index)=> {
                        return (
                          <li 
                            key={index}>
                            <Link to={link.path}>{link.linkTitle}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                 </div>
                </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer