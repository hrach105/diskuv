import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import '../components/components.scss'
const Layout = ({children, layoutClassName}) => {
  return (
    <div className={`layout ${layoutClassName}`}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout