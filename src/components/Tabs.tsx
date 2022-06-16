import React,{useState} from 'react';
import './components.scss';

const Tabs = () => {
  const [activeTabLabel,setActiveTabLabel] = useState('MONTHLY');

  const monthlyIsActive = activeTabLabel === "MONTHLY"
  const annualIsActive = activeTabLabel === "ANNUAL"

  const activeClassMonthly = monthlyIsActive ? 'active-tab': ''
  const activeClassAnnual =  annualIsActive ? 'active-tab': ''

  const activeTabClassName = monthlyIsActive ? 'monthly' : annualIsActive ? 'annual': '';

  function resetActiveTabToMonthly() {
    setActiveTabLabel('MONTHLY');
  }
  function resetActiveTabToAnnual() {
    setActiveTabLabel('ANNUAL');
  }


  console.log(activeTabLabel)
  return (
    <div>
        <div className={`tab ${activeTabClassName}`}>
            <span onClick={resetActiveTabToMonthly} className={activeClassMonthly}>Monthly</span>
            <span onClick={resetActiveTabToAnnual} className={activeClassAnnual}>Annual</span>
        </div>
    </div>
  )
}

export default Tabs