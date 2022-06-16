import React from 'react'
import Layout from '../components/Layout'
import Tabs from '../components/Tabs';
import PriceCardItem from '../fragments/pricing/PriceCardItem';
import cardIcon from '../images/smartphone_device_icon.svg'
import checkmarkIcon from '../images/checkmark.svg'
import lockIcon from '../images/locke-icon.svg'
import htmlIcon from '../images/html_tag_icon.svg'
import bagIcon from '../images/suitcase_icon.svg'
import Table from '../fragments/pricing/Table';

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
              <div className="price-cards">
                <PriceCardItem
                  cardIcon={cardIcon}
                  cardTitle="Diskuv Communicator"
                  cardDesc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
                  checkmarkIcon={checkmarkIcon}
                  serviceText="Lorem ipsum dolor"
                  price="$195"
                />
                 <PriceCardItem
                  cardIcon={lockIcon}
                  cardTitle="Diskuv Sanctuary"
                  cardDesc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
                  checkmarkIcon={checkmarkIcon}
                  serviceText="Lorem ipsum dolor"
                  price="$78"
                />
                 <PriceCardItem
                  cardIcon={htmlIcon}
                  cardTitle="Diskuv Ocaml"
                  cardDesc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
                  checkmarkIcon={checkmarkIcon}
                  serviceText="Lorem ipsum dolor"
                  price="$195"
                />
                <PriceCardItem
                  cardIcon={bagIcon}
                  cardTitle="Diskuv Sdk"
                  cardDesc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
                  checkmarkIcon={checkmarkIcon}
                  serviceText="Lorem ipsum dolor"
                  price="$230"
                />
              </div>
              <Table />
          </div>
        </div>
    </Layout>
  )
}

export default Pricing