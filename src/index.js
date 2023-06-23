import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import movies from "./reducers";

// const store = configureStore({
//   movies,
// });

const store = createStore(movies);

// console.log("Store:", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
