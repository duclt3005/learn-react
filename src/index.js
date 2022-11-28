import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StoreProvider } from "./context/store";
import "./index.scss";
// import store from "./redux/todo/redux/store";
import store from "./redux/todo/redux-toolkit/store";

// ---------- REDUX --------------

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <StoreProvider>
//         <App />
//       </StoreProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);