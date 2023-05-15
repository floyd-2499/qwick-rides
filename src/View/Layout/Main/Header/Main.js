import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as Link } from "react-router-dom";
import {
  faHome,
  faPeopleGroup,
  faShieldHalved,
  faCreditCardAlt,
  faAddressCard,
  faNewspaper,
  faHeadset,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import './Main.scss'
import uris from "../../../../Config/Router/URI";

const routes = [
  {
    text: "Home",
    route: uris.home,
    icon: faHome,
  },
  {
    text: "About Us",
    route: uris.about,
    icon: faPeopleGroup,
  },
  {
    text: "Safety",
    route: uris.safety,
    icon: faShieldHalved,
  },
  {
    text: "Postpaid Card",
    route: uris.postpaid,
    icon: faCreditCardAlt,
  },
  {
    text: "Careers",
    route: uris.career,
    icon: faAddressCard,
  },
  {
    text: "Blogs",
    route: uris.blog,
    icon: faNewspaper,
  },
  {
    text: "Contact",
    route: uris.contact,
    icon: faHeadset,
  },
];

const LogoMain = () => {
  return (
    <div className="logo-container">
      <Link to={uris.home}>
        Logo here
      </Link>
    </div>
  );
};

const NavLinks = ({ mobile, setOpenMenu }) => {
  return (
    <div className="nav-list-container">
      <ul className="nav-list">
        {routes.map((item) => {
          return (
            <li className="nav-list-content" key={item.text}>
              <Link
                onClick={() => setOpenMenu && setOpenMenu(false)}
                to={item.route}
              >
                {mobile && <FontAwesomeIcon icon={item.route} />}
                <h3>{item.text}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const OptionsMain = () => {
  return (
    <div className="options-container">
      <div className="download-button">Download App</div>
    </div>
  );
};

const HeaderMain = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header-container">
      <div className="logo-section">
        <LogoMain />
      </div>
      <div className="pc-nav-section pc">
        <NavLinks />
      </div>
      <div className="mobile-nav-bars mobile">
        <FontAwesomeIcon icon={faBars} />
      </div>
      {openMenu && (
        <div className="mobile-nav-section mobile">
            <FontAwesomeIcon icon={faXmark} onClick={() => setOpenMenu(false)}/>
          <NavLinks mobile setOpenMenu={setOpenMenu} />
          <OptionsMain />
        </div>
      )}
      <div className="pc-option-section pc">
        <OptionsMain />
      </div>
    </div>
  );
};

export default HeaderMain