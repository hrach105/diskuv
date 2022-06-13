import React from 'react'
import './map.scss'
import MapImg from '../../images/map.png'

const Map = ({mapTitle,mapDesc}) => {
  return (
    <div className='map-content main-container'>
        <div className="map-heading">
            <h2>{mapTitle}</h2>
            <p>{mapDesc}</p>
        </div>
        <div className="map-img">
            <img src={MapImg} alt="" />
        </div>
    </div>
  )
}

export default Map