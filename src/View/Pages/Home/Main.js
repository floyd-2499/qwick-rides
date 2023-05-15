import React from 'react'

import './Main.scss'
import bikeTaxi from './Assets/BikeTaxi.png'
import HeroSectionMain from './Sections/Hero'
import QwikLinksSectionMain from './Sections/QwikLinks'
import BookRideSectionMain from './Sections/BookRide'
import FeaturesSectionMain from './Sections/Features'
import DetailsSectionMain from './Sections/Details'
import ReviewsSectionMain from './Sections/Reviews'
import BusinessSolutionSectionMain from './Sections/Business'

const HomeMain = () => {
  return (
    <div className='home-container'>
        <div className='hero-section-container'>
            <HeroSectionMain />
        </div>
        <QwikLinksSectionMain />
        <div className='feature-image-section'>
          <img src={bikeTaxi} alt='Feature' />
        </div>
        <BookRideSectionMain />
        <FeaturesSectionMain />
        <DetailsSectionMain />
        <ReviewsSectionMain />
        <BusinessSolutionSectionMain />
    </div>
  )
}

export default HomeMain