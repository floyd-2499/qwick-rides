import React from 'react'

import '../Main.scss'
import bikeRider from '../Assets/bike rider.png'

const HeroSectionMain = () => {
  return (
    <div className='hero-section'>
        <div className='left-section'>
            <div className='text-section'>
                <h4>India's Largest Bike Taxi Service</h4>
                <p>Qwik is India's Bike taxi app. We are now running operations in more than 40 cities..</p>
            </div>
            <div className='buttons-section'>
                <div className='button download-app'>Download App</div>
                <div className='button driver'>Sign-up as Driver</div>
            </div>
        </div>
        <div className='right-section'>
            <img src={bikeRider} alt='bike-rider' />
        </div>
    </div>
  )
}

export default HeroSectionMain