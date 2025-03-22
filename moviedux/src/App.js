import React from "react";
import "./App.css";
import "./styles.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MoviesGrid from "./component/MoviesGrid";

function App() {
  return (
    <div className="App">
      
      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
