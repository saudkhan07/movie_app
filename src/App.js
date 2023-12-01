import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import { BiMailSend } from "react-icons/bi";

const Api_Url = "https://www.omdbapi.com/?apikey=e43a1676";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>

        <div className="search">
          <input
            value={searchTerm}
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search img"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
      <div
        className="about"
        style={{ backgroundColor: "rgba(249, 211, 180, 1)" }}
      >
        <h2 style={{ textAlign: "center" }}>About</h2>
        <p style={{ textAlign: "center" }}>
          Movie Land is a Movie streaming site with zero ads with over 10000
          movies and TV-Series.
        </p>
        <p style={{ textAlign: "center" }} className="mt-3">
          <BiMailSend /> : saudahmedk07@gmail.com
        </p>

        <h5 style={{ textAlign: "center" }}>
          Saud Ahmed Khan © 2023 Copyright:All Rights Reserved
        </h5>
      </div>
    </>
  );
};

export default App;
