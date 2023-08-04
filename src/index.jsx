import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.scss";
import { Home } from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryDetails } from "./pages/CountryDetails/CountryDetails";
import { App } from "./components/App";
import { GlobalStyle } from "./utils/styles/GloabalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <Router>
      <GlobalStyle />
      <App />
    </Router>

    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();