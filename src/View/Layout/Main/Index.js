import React from "react";

import './Index.scss'
import HeaderMain from "./Header/Main";
import FooterMain from "./Footer/Main";

const LayoutMain = ({ children }) => {
  return (
    <div className="layout-main">
      <div className="header">
        <HeaderMain />
      </div>
      <div className="main-body">{children}</div>
      <div className="footer">
        <FooterMain />
      </div>
    </div>
  );
};

export default LayoutMain;
