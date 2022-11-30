import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviePage from "./pages/MoviePage";
import "./simple-movie.scss";

const SimpleMovie = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default SimpleMovie;
