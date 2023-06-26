import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers";

// used for console logging the action types

// function logger(obj, next, action)
const logger = function ({ dispatch, getState }) {
  //the object consits of 2 properties a. dispatch property, b. getState property. Both the functions are present in store already. The redux will automatically pass those functions here inside argument object's properties.
  return function (next) {
    return function (action) {
      // Middleware code
      console.log("ACTION_TYPE: ", action.type);
      next(action); // next is used to call next middleware function. If there is no other middleware left then instead of next automatically dispatch funtion will be called.
    };
  };
};

const store = createStore(combineReducers, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
