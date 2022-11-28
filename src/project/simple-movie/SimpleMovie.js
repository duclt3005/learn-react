import React from "react";
import { NavLink } from "react-router-dom";
import "./simple-movie.scss";

const SimpleMovie = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20 overflow-hidden">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-3 text-white">
              Avenger Endgame
            </h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-md bg-primary text-white font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container">
        <h2
          className="capitalize text-white mb-5 text-2xl font-bold
        "
        >
          Now Playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3b/Flash_%28Barry_Allen_circa_2019%29.png"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3">The Flash</h3>
              <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                <span>2022</span>
                <span>7.5</span>
              </div>
              <button className="py-3 px-6 rounded-md bg-primary text-white font-medium">
                Watch now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SimpleMovie;
