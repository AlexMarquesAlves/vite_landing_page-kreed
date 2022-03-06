import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
// Global Styles
import GlobalStyles from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
