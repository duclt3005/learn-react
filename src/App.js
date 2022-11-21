import ReactContext from "./react-context";
import ReactMemo from "./memo/ReactMemo";
import TwoWayBinding from "./two-way-binding";
import UseCallBackDemo from "./useCallback";
import UseEffectDemo from "./useEffect";
import UseReducerDemo from "./useReducer";
import UseRefDemo from "./useRef";
import UseStateDemo from "./useState";
import "./app.css";
import Context from "./context";
import { useState } from "react";
import Form from "./form/Form";
import MovieSearch from "./movie-search/MovieSearch";
import SignUpForm from "./form/SignUpForm";
import SignUpFormHook from "./form/SignUpFormHook";

function App() {
  return (
    <div className="App">
      {/* <UseStateDemo /> */}
      {/* <TwoWayBinding /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <ReactMemo /> */}
      {/* <UseCallBackDemo /> */}
      {/* <UseReducerDemo /> */}
      {/* <ReactContext /> */}
      {/* <Context /> */}
      {/* <Form /> */}
      {/* <MovieSearch /> */}
      {/* <SignUpForm /> */}
      <SignUpFormHook />
    </div>
  );
}

export default App;
