import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./App";
import Signup from "./Practice";
import ButtonTesting from "./MyButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
let isLoggedIn = true;

root.render(
  <React.StrictMode>
    {/* {isLoggedIn ? <Login /> : <Signup />} */}
    <ButtonTesting />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
