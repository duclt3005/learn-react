import React from 'react';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList';
import Header from '../layout/Header';

const HomePage = () => {
  return (
    <>
      <Banner />
      <section className="movies-layout page-container">
        <h2 className="capitalize text-white mb-5 text-2xl font-bold">
          Now Playing
        </h2>
        <MovieList />
      </section>
      <section className="movies-layout page-container">
        <h2 className="capitalize text-white mb-5 text-2xl font-bold">
          Top Rated
        </h2>
        <MovieList type="top_rated"/>
      </section>
      <section className="movies-layout page-container">
        <h2 className="capitalize text-white mb-5 text-2xl font-bold">
          Popular
        </h2>
        <MovieList type="popular"/>
      </section>
    </>
  );
};

export default HomePage;