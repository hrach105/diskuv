import { Link,graphql } from 'gatsby'
import React from 'react'
import Navbar from '../Navbar'
import Logo from '../../images/logo.png';
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
        <div className="left-side">
            <div className="logo">
             <Link to='/'>
                <img src={Logo} alt="" />
             </Link>
            </div>
            <Navbar />
        </div>
        <div className="auth">
          <Link className='sign-up' to='#'>Sign Up</Link>
        </div>
    </header>
  )
}

export default Header