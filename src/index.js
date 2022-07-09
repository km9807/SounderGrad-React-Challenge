import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const slides = [
  {
    title: "Sample Title 1",
    text: "Sample Text 1",
  },
  {
    title: "Sample Title 2",
    text: "Sample Text 2",
  },
  {
    title: "Sample Title 3",
    text: "Sample Text 3",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App slides={slides} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
