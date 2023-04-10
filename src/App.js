import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Heading from "./components/Heading";
import Home from "./components/Home";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Heading />
      <Home />
    </div>
  );
}

export default App;
