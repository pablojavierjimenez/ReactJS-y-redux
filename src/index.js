import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { legacy_createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { reducer as reduxForm } from "redux-form";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = legacy_createStore(combineReducers({
  contador: reducer,
  form: reduxForm,
}) );
root.render(
  <Provider store={store}>

      <App />

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
