import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Main.scss";
import uris from "../../../Config/Router/URI";
import abhibusLogo from './Assets/Abhibus-logo.png'
import redbusLogo from './Assets/Redbus-logo.png'
import bookmyshowLogo from './Assets/Bookmyshow-logo.png'
import abhibus from './Assets/Abhibus.png'
import bookmyshow from './Assets/Bookmyshow.png'
import redbus from './Assets/Redbus.png'
import BookRideSectionMain from "../Home/Sections/BookRide";

const benefits = [
  {
    id: 1,
    title: "Pay Later",
    description: "Every 15 days, pay all of your costs at once",
  },
  {
    id: 2,
    title: "Pay Everywhere",
    description:
      "Not only on Rides. Approved over 300 apps and continues to grow",
  },
  {
    id: 3,
    title: "One Click Checkout",
    description: "Quick payment",
  },
  {
    id: 4,
    title: "One Bill Payment",
    description: "There is only one bill, one payment, and no problems.",
  },
  {
    id: 5,
    title: "No Additional Charges",
    description: "No hidden charges",
  },
];

const offers = [
  {
    id: 1,
    name: "book my show",
    image: bookmyshow,
    logo: bookmyshowLogo,
    text: "Cashback upto ₹200",
  },
  {
    id: 2,
    name: "red bus",
    image: redbus,
    logo: redbusLogo,
    text: "Cashback upto ₹200",
  },
  {
    id: 3,
    name: "abhi bus",
    image: abhibus,
    logo: abhibusLogo,
    text: "Cashback upto ₹200",
  },
];

const PostpaidCardMain = () => {
  return (
    <div className="postpaid-card-container">
      <div className="hero-section">
        <h1>Qwik Money</h1>
        <p>Register for Qwik money and get your virtual card</p>
        <Link to={uris.postpaid}>
          <div className="button">
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
      </div>
      <div className="benefits-section">
        <h1>BENEFITS</h1>
        <div className="benefits-container">
          {benefits.map((item) => {
            return (
              <div className="card" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="book-ride-section home-container">
        <BookRideSectionMain />
      </div>
      <div className="offers-section">
        <h1>EXCLUSIVE OFFER</h1>
        <p>Get the greatest deals hand-picked especially for you!</p>
        <div className="carousel-section">
          <div className="section-container">
            {offers.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <div className="feature-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="details">
                    <div className="logo">
                      <img src={item.logo} alt={item.name} />
                    </div>
                    <h2>{item.text}</h2>
                    <span>T&C Apply</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostpaidCardMain;
