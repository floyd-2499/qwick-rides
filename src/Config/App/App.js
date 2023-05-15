import React from 'react'
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from '../ErrorHandler/ErrorBoundary';
import Router from '../Router/Router';

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App