import React from "react";

import "../Main.scss";
import { Link } from "react-router-dom";
import uris from "../../../../Config/Router/URI";

const DetailsSectionMain = () => {
  return (
    <div className="details-section">
      <div className="section-content">
        <h1>SAFETY FOR ALL</h1>
        <p>
          Qwik is a community where everyone belongs.We'll always treat you with
          respect and look out for your safety. We do this by maintaining high
          standards, which start before your very first ride.Our proactive
          safety measures are always on. And anytime night or day, we offer real
          help from real humans.
        </p>
        <Link to={uris.home}>
          <div className="button">Know more</div>
        </Link>
      </div>
      <div className="section-content">
        <h1>KNOW US BETTER</h1>
        <p>
          We have crossed 1 lakh customers and 1 million rides. qwik is here to
          revolutionize the way people travel as we bring you redefined comfort
          & convenience with our disruptive service model.
        </p>
        <Link to={uris.home}>
          <div className="button">Know more</div>
        </Link>
      </div>
      <div className="section-content">
        <h1>OUR IMPACT</h1>
        <div className="stats">
          <div className="stats-item">
            <h2>1 Lakh+</h2>
            <h3>Downloads</h3>
          </div>
          <div className="stats-item">
            <h2>40+</h2>
            <h3>Cities</h3>
          </div>
          <div className="stats-item">
            <h2>10K</h2>
            <h3>Drivers</h3>
          </div>
          <div className="stats-item">
            <h2>30K</h2>
            <h3>Happy Drives</h3>
          </div>
        </div>
        <p>
          Our presence in the country has changes the way people commute in a
          positive way
        </p>
      </div>
      <div className="section-content">
        <h1>WHY DRIVE WITH QWIK IN YOUR CITY?</h1>
        <p>
          Earn when you want with a flexible schedule, quality support, abd
          exclusive earning opportunities.
        </p>
      </div>
    </div>
  );
};

export default DetailsSectionMain;
