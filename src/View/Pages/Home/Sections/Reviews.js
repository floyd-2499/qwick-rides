import React, { useState } from "react";

import '../Main.scss'
import maleProfile from "../Assets/male.png";
import femaleProfile from "../Assets/female.png";

const customerReviews = [
  {
    id: 1,
    name: "Prakash",
    gender: "male",
    type: "customer",
    review:
      "Because they have skilled and excellent riders, this app is terrific and highly safe to use. In addition, it is incredibly practical and gets us there faster than any other kind of transportion.",
  },
  {
    id: 2,
    name: "Priyanka",
    gender: "female",
    type: "customer",
    review:
      "I enjoy Qwik since it is speedier than other applications and is generally accessible whenever I need it. I do not know how to ride a bike, but the software makes it fun for me to do so and enjoy the beautiful weather in Bangalore.",
  },
];

const driverReviews = [
  {
    id: 1,
    name: "Reshma",
    gender: "female",
    type: "driver",
    review: "Happy to serve",
  },
  {
    id: 2,
    name: "Ranjith",
    gender: "male",
    type: "driver",
    review: "Good to work, satisfied with the support. Happy to serve.",
  },
];

const ReviewsSectionMain = () => {
  const [reviews, setReviews] = useState(customerReviews);
  return (
    <div className="review-section">
      <h1>STRAIGHT FROM THE CUSTOMER'S HEART</h1>
      <div className="review-container">
        <div className="options">
          <div
            className={`button ${reviews === customerReviews && 'active'}`}
            onClick={() => setReviews(customerReviews)}
          >
            CUSTOMER
          </div>
          <div className={`button ${reviews === driverReviews && 'active'}`} onClick={() => setReviews(driverReviews)}>
            DRIVER
          </div>
        </div>
        <div className="reviews">
          {reviews.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="profile">
                  <div className="profile-pic">
                    <img src={item.gender === "male" ? maleProfile : femaleProfile} alt="Profile" />
                  </div>
                  <div className="details">
                    <h5>{item.name}</h5>
                    <p>{item.type}</p>
                  </div>
                </div>
                <div className="review-text">
                    {item.review}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSectionMain;
