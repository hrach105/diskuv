import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import '../components/components.scss'
const Layout = ({children, layoutClassName}:any):any => {
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