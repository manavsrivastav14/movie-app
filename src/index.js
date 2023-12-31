import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// used for console logging the action types

// function logger(obj, next, action)
// const logger = function ({ dispatch, getState }) {
//   //the object consits of 2 properties a. dispatch property, b. getState property. Both the functions are present in store already. The redux will automatically pass those functions here inside argument object's properties.
//   return function (next) {
//     return function (action) {
//       // Middleware code
//       console.log("ACTION_TYPE: ", action.type);
//       next(action); // next is used to call next middleware function. If there is no other middleware left then instead of next automatically dispatch funtion will be called.
//     };
//   };
// };

// Other way of writing the above function
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // console.log("ACTION_TYPE: ", action.type);
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(combineReducers, applyMiddleware(logger, thunk));

// export const StoreContext = createContext();
// console.log("StoreContext: ", StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// const connectedAppComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }

//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
