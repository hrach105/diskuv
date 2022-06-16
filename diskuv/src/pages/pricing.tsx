import React from 'react'
import Layout from '../components/Layout'
import Tabs from '../components/Tabs';

const Pricing = () => {
  return (
    <Layout>
        <div className="pricing">
          <div className="main-container">
              <div className="pricing-heading">
                <h1>Different packages, for different purposes</h1>
              </div>
              <div className="pricing-tab">
                  <Tabs />
              </div>
          </div>
        </div>
    </Layout>
  )
}

export default Pricing