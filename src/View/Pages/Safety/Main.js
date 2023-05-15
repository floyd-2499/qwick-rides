import React, { useState, useEffect } from "react";

import './Main.scss';

const customerSafetyFeatures = [
  {
    id: 1,
    title: "How We Share The Ride",
    description:
      "We always treat each other with respect, and we don't tolerate discrimination. Anyone who violates our policies may be permanently removed from the platform. you can cancel any ride that makes you feel unsafe. See our Community Guidelines.",
  },
  {
    id: 2,
    title: "Driver Background Checks",
    description:
      "All drivers must pass a background check before driving with Qwik. After that they're required to pass an annual background check. We also continuously monitor for criminal convictions. And when necessary, we deactivate drivers.",
  },
];

const captainSafetyFeatures = [
  {
    id: 1,
    title: "Title",
    description: "Description",
  },
  {
    id: 2,
    title: "Background Check",
    description:
      "All drivers must pass a background check before driving with Qwik. After that they're required to pass an annual background check. We also continuously monitor for criminal convictions. And when necessary, we deactivate drivers.",
  },
];

const customerSupportFeatures = [
  {
    id: 1,
    title: "See Who You're Riding With",
    description:
      "Once you're matched with your driver, you'll see their name, profile photo, and rating. And when you add a photo to your profile, drivers know who to look for.",
  },
  {
    id: 2,
    title: "Your Privacy Is Protected",
    description:
      "We never share your phone number or personal information with other riders or drivers.And once a trip is complete, your pickup and drop-off locations are concealed in the driver's trip history.",
  },
  {
    id: 3,
    title: "Two-Way Ratings",
    description:
      "If you rate your driver three stars or fewer, you won't be matched with them again. Your feedback in anonymous and lets us take appropriate action to help keep the community safe.",
  },
];

const captainSupportFeatures = [
  {
    id: 1,
    title: "Title",
    description: "Description",
  },
  {
    id: 2,
    title: "Your Privacy Is Protected",
    description:
      "We never share your phone number or personal information with other riders or drivers.And once a trip is complete, your pickup and drop-off locations are concealed in the driver's trip history.",
  },
  {
    id: 3,
    title: "Two-Way Ratings",
    description: "Rating",
  },
];

const SafetyMain = () => {
  const [type, setType] = useState("customer");
  const [safetyFeatures, setSafetyFeatures] = useState(customerSafetyFeatures);
  const [supportFeatures, setSupportFeatures] = useState(customerSupportFeatures);

  useEffect(() => {
    if(type === 'customer') {
      setSafetyFeatures(customerSafetyFeatures)
      setSupportFeatures(customerSupportFeatures)
    } else {
      setSafetyFeatures(captainSafetyFeatures)
      setSupportFeatures(captainSupportFeatures)
    }
  }, [type])

  return (
    <div className="safety-container">
      <div className="hero-section">
        <h1>Safety for all</h1>
        <p>
          Qwik is a community where everyone belongs. We'll always treat you
          with respect and look out for your safety. We do this by maintaining
          high standards, which start before your very first ride. Our proactive
          safety measures are always on. And anytime night or day, we offer real
          help from real humans.
        </p>
      </div>
      <div className="safety-features-container">
        <h1>YOUR SAFETY IS OUR PRIORITY</h1>
        <div className="options-container">
          <div className={`button ${type === 'customer' && 'active'}`} onClick={() => setType("customer")}>
            CUSTOMER
          </div>
          <div className={`button ${type === 'captain' && 'active'}`} onClick={() => setType("captain")}>
            CAPTAIN
          </div>
        </div>
        <div className="features-section">
          <h1>HIGH SAFETY STANDARDS</h1>
          {safetyFeatures.map((item) => {
            return (
              <div className="feature" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className="features-section">
          <h1>PROACTIVE SAFETY SUPPORT</h1>
          {supportFeatures.map((item) => {
            return (
              <div className="feature" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className="features-section">
          <h1>24*7 Customer Support</h1>
          <p>
            Both, our drivers and customers can report any kind of issues to
            Qwik through the 24*7 support feature on the app post & during the
            ride.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyMain;
