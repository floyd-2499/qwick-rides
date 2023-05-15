import './View/Layout/Styles/Globals/_style.scss'

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './Config/App/App'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);