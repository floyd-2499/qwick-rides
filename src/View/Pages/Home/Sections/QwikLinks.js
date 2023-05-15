import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../Main.scss";
import uris from "../../../../Config/Router/URI";

const QwikLinksSectionMain = () => {
  return (
    <div className="qwik-links-section">
      <Link to={uris.home}>
        <div className="card">
          <h3>Qwik Customer</h3>
          <p>App for the customer</p>
          <div className="icon-container">
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
        </div>
      </Link>

      <Link to={uris.home}>
        <div className="card">
          <h3>Qwik Driver</h3>
          <p>App for the drive partners</p>
          <div className="icon-container">
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
        </div>
      </Link>
      <Link to={uris.postpaid}>
        <div className="card">
          <h3>Qwik Postpaid</h3>
          <p>Postpaid Feature</p>
          <div className="icon-container">
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default QwikLinksSectionMain;
