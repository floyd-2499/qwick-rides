import React, { Component } from "react";

import Error500 from "../../Pages/Errors/500/Index";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error500 />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
