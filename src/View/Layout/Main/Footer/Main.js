import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './Main.scss'
import uris from '../../../../Config/Router/URI'
import googlePlay from '../Assets/Google Play.png'
import appStore from '../Assets/App store.png'

const FooterMain = () => {
  return (
    <div className='footer-container'>
      <div className='sections'>
        <h1>Customer Apps</h1>
        <Link to={uris.home}>
        <img src={googlePlay} alt='Play Store' />
        </Link>
        <Link to={uris.home}>
        <img src={appStore} alt='Play Store' />
        </Link>
      </div>
      <div className='sections'>
      <h1>Driver Apps</h1>
      <Link to={uris.home}>
        <img src={googlePlay} alt='Play Store' />
        </Link>
      </div>
      <div className='sections menu'>
        <Link to={uris.home}>
          Home
        </Link>
        <Link to={uris.about}>
          About Us
        </Link>
        <Link to={uris.safety}>
          Safety
        </Link>
        <Link to={uris.postpaid}>
          Postpaid Card
        </Link>
        <Link to={uris.career}>
          Careers
        </Link>
        <Link to={uris.blog}>
          Blogs
        </Link>
      </div>
      <div className='sections'>
      <Link to={uris.home}>
        Privacy Policy
        </Link>
        <Link to={uris.home}>
          Terms of Service
        </Link>
        <h2>Follow Us</h2>
        <div className='social-media'>
          <Link to={uris.home}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to={uris.home}>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to={uris.home}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to={uris.home}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterMain