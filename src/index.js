import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { configureStore, createStore } from "@reduxjs/toolkit";
import movies from "./reducers";

// const store = configureStore({
//   movies,
// });

const store = createStore(movies);

console.log("Store:", store);
console.log("Store state:", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
