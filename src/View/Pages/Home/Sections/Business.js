import React from 'react'

import '../Main.scss'

const BusinessSolutionSectionMain = () => {
  return (
    <div className='business-solutions-section'>
        <h1>QWIK BUSINESS SOLUTIONS</h1>
        <h5>Ground transportation isn't one-size-fits-all, because your people, and their lives, arent either. Our teams work with organizations across a wide range of industries to deliver transportation solution made for your business.</h5>
        <div className='business-features'>
            <div className='card'>
                <h2>BUSINESS TRAVEL</h2>
                <p>MAKE BUSINESS TRAVEL EASY AND REWARDING.PLUS,GET INSIGHTS INTO GROUND TRANSPORTATION HABITS TO IMPROVE THE EXPERIENCE.</p>
            </div>
            <div className='card'>
                <h2>COMMUTE</h2>
                <p>GET EMPLOYEES WHERE THEY NEED TO BE, WHEN THEY NEED TO BE THRE, WITH OPTIONS FOR YOUR SCHEDULE AND BUDGET.</p>
            </div>
            <div className='card'>
                <h2>HEALTHCARE</h2>
                <p>PROVIDE PATIENTS WITH EASY ACCESS TO RELIABLE RIDES TO AND FROM MEDICAL APPOINTMENTS.</p>
            </div>
            <div className='card'>
                <h2>EVENTS</h2>
                <p>GIVE YOUR GUESTS A RELIABLE WAY TO GET TO EVENTS (AND BACK HOME)</p>
            </div>
            <div className='card'>
                <h2>CUSTOMER LOYALTY</h2>
                <p>REWARD YOUR TOP CUSTOMERS WITH COMPLIMENTARY RIDES TO AND FROM YOUR STORE.</p>
            </div>
        </div>
    </div>
  )
}

export default BusinessSolutionSectionMain