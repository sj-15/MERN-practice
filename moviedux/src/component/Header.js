import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux"></img>
      <h2 className="app-subtitle">
        Be ready with your popcorn. Here's your next movie.
      </h2>
    </div>
  );
}
