import React from "react";

import "./Main.scss";

const LoadingSpinnerFull = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className="full-screen-loader">
          <div className="loading-spinner-holder">
            <div className="spinner-border text-primary" role="status" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LoadingSpinnerFull
