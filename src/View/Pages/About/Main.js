import React from "react";
import { Link } from "react-router-dom";

import "./Main.scss";
import uris from "../../../Config/Router/URI";

const AboutUsMain = () => {
  return (
    <div className="about-us-container">
      <div className="hero-section">
        <h1>India's loved Bike Taxi Service</h1>
        <h5>We are the first choice for bike taxi riders.</h5>
        <h6>
          We are the first choice for bike taxi riders as we provide rides at
          economical price with good service and safety.
        </h6>
      </div>
      <div className="feature-section">
        <div className="card">
          <h1>WHAT MAKE US DIFFERENT?</h1>
          <p>
            Our bike taxis are faster compared to other modes of transport! So
            people choose Qwik services.
          </p>
        </div>
      </div>
      <div className="info-section">
        <h1>CHAMPIONS OF OUR SUCCESS STORY</h1>
        <p>
          QWIK HAS JUST GOT STARTED WITH A VISION TO TRANSFORM THE WAY PEOPLE
          COMMUTE TODAY. STRIVE TO MAKE A DIFFERENCE TO PEOPLE LIVES AND MAKE
          COMMUTE FASTER AND STRESS-LESS.
        </p>
        <div className="founders">
          <div className="details">
            <h2>TEJASH PAREKH</h2>
            <h3>Founder</h3>
          </div>
          <div className="details">
            <h2>EDWARD MILGRAM</h2>
            <h3>Founder</h3>
          </div>
          <div className="details">
            <h2>LOVEDEEP SINGH</h2>
            <h3>Founder</h3>
          </div>
          <div className="details">
            <h2>SHIVAM TIWARI</h2>
            <h3>Founder</h3>
          </div>
          <div className="details">
            <h2>DIPESH PARIDA</h2>
            <h3>Founder</h3>
          </div>
          <div className="details">
            <h2>MICHAEL NIREN</h2>
            <h3>Founder</h3>
          </div>
        </div>
      </div>
      <div className="careers-section">
        <div className="card">
          <h1>JOBS @ QWIK</h1>
          <Link to={uris.career}>
            <div className="button">APPLY NOW</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
