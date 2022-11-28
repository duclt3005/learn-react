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
import ModalDemo from "./modal/ModalDemo";
import Header from "./components/Header";
import { AuthProvider } from "./context/authContext";
import { GalleryProvider } from "./context/galleryContext";
import PhotoList from "./gallery/PhotoList";
import CartList from "./gallery/CartList";
import TodoRedux from "./redux/todo/TodoRedux";
import SimpleMovie from "./project/simple-movie/SimpleMovie";

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
      {/* <SignUpFormHook /> */}
      {/* <ModalDemo /> */}
      {/* <AuthProvider>
        <GalleryProvider>
          <Header />
          <PhotoList />
          <CartList />
        </GalleryProvider>
      </AuthProvider> */}
      {/* <TodoRedux /> */}
      <SimpleMovie />
    </div>
  );
}

export default App;
