import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
   <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/pricing'>Pricing</Link></li>
      <li className='hoverable'>products
        <ul className='sub-pages'>
          <li> <Link to='/products/diskuvComunicator'>diskuvComunicator</Link></li>
          <li><Link to='/products/diskuvSanctuary'>diskuv sanctuary</Link></li>
        </ul>
      </li>
      <li><Link to='/forDevelopers'>For developers</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>    
   </nav>
  )
}

export default Navbar