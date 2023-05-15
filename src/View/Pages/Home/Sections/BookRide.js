import React from 'react'

import '../Main.scss'
import mobileScreen from '../Assets/Mobile Screen.png'

const BookRideSectionMain = () => {
  return (
    <div className='book-ride-section'>
        <div className='left-section'>
            <h1>HOW TO BOOK A RIDE?</h1>
            <h5>Head over to your Qwik Customer app and follow the steps...</h5>
            <div className='points-section'>
                <span>1</span>
                <p>After completing Sign in/Sign up, Select the pickup Location & Drop Location.</p>
            </div>
            <div className='points-section'>
                <span>2</span>
                <p>Select the Mode of Vehicle</p>
            </div>
            <div className='points-section'>
                <span>3</span>
                <p>Choose the payment option and you're all set. HAPPY JOURNEY!</p>
            </div>
        </div>
        <div className='right-section'>
            <img src={mobileScreen} alt='App' />
        </div>
    </div>
  )
}

export default BookRideSectionMain