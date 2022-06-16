import React from 'react'
import './terms.scss'
import {termsContentData} from './termsContentData.js'
const TermItem = () => {
   
  return (
    <div className='terms main-container'>
        <h1>Terms & Conditions</h1>
        <div className="terms-content">
            <ol>
               {
                termsContentData.map((item,index):any =>
                <li key={item.id}>
                   <p>{item.title}</p>
                   {item.desc}
                </li>
               )}
            </ol>
        </div>
    </div>
  )
}

export default TermItem