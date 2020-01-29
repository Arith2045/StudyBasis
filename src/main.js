import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const main = (Component, reducer) => {
  ReactDOM.render(
    <Provider store={createStore(reducer)}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

export default main;
