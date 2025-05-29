import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MoviesGrid from "./component/MoviesGrid";
import WatchList from "./component/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchList] = useState([]);
  useState(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <WatchList
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
