import ReactContext from "./react-context";
import ReactMemo from "./memo/ReactMemo";
import TwoWayBinding from "./two-way-binding";
import UseCallBackDemo from "./useCallback";
import UseEffectDemo from "./useEffect";
import UseReducerDemo from "./useReducer";
import UseRefDemo from "./useRef";
import UseStateDemo from "./useState";
import './app.css';
import Context from "./context";

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
      <Context />
    </div>
  );
}

export default App;
