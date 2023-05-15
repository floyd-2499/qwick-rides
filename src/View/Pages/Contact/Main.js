import React from "react";

import "./Main.scss";
import { Link } from "react-router-dom";
import uris from "../../../Config/Router/URI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";

const address = [
  {
    id: 1,
    name: "Head Office",
    address:
      "C-001/A2,SECTOR-16B,GAUTAM BUDHA NAGAR, NOIDA, DELHI - 201301, INDIA",
    phone: "+919315133187",
    link: "",
  },
  {
    id: 2,
    name: "Corporate Office",
    address:
      "BLOCK L, EMBASSY TECH VILLAGE, BELLANDUR, BANGALORE, KARNATAKA - 560103, INDIA",
    phone: "+919315133187",
    link: "",
  },
  {
    id: 3,
    name: "Head Office",
    address:
      "C-001/A2,SECTOR-16B,GAUTAM BUDHA NAGAR, NOIDA, DELHI - 201301, INDIA",
    phone: "+919315133187",
    link: "",
  },
];

const ContactMain = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="address-section">
        {address.map((item) => {
          return (
            <div className="container" key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.address}</p>
              <h3>{item.phone}</h3>
              <Link to={uris.contact}>
              <div className="direction">
                Get Direction
                <FontAwesomeIcon icon={faMapMarked} />
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactMain;
