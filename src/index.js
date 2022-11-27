import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { StoreProvider } from "./context/store";
import "./index.css";
import store from "./redux/todo/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
