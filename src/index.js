import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

let path = window.location.pathname;

if (path === "/" || path === "/login" || path === "/register" || path === "/booking"){
  import("./LandingPage/Landing.css").then(() => {
    console.log("LandingPage CSS Imported");
  })
}
else{
  import("./NotFound.css").then(() => {
    console.log("Unknown CSS Imported");
  })
}

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
