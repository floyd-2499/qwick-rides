import React, { useRef } from "react";

import "./Main.scss";
import { Link } from "react-router-dom";
import uris from "../../../Config/Router/URI";

const CareersMain = () => {
  const scollToRef = useRef();

  return (
    <div className="careers-container">
      <div className="hero-section">
        <h1>Be a part of our team.</h1>
        <p>
          We envision a world whre cities feel small again. Where transportation
          and tech bring people together, instead of apart. We see the future as
          community-driven-and it starts with you.
        </p>
        <div
          className="button"
          onClick={() => scollToRef.current.scrollIntoView()}
        >
          JOIN NOW
        </div>
      </div>
      <div className="join-team-section" id="join">
        <h1>Join Our Team</h1>
        <p>
          Amaxing dream need amazing people to make it happen for billions. Are
          you the one?
        </p>
        <div className="card">
          <h2>WE MAINLY HIRE</h2>
          <div className="options-container" ref={scollToRef}>
            <div className="option">
              <h3>Join as a Driver role & become a hero for us!</h3>
              <Link to={uris.career}>
                <div className="button">Apply Now</div>
              </Link>
            </div>
            <div className="option">
              <h3>Join us as a office staff & become backbone of us!</h3>
              <Link to={uris.career}>
                <div className="button">Apply Now</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersMain;
