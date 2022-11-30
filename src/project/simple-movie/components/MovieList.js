import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { API_KEY, fetcher } from "../config";

// https://api.themoviedb.org/3/search/movie?api_key=a75830ccf5de99b13d1ec3a570a51a4e&query=Jack+Reacher

const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&query=''`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper spaceBetween={50} slidesPerView={3}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
