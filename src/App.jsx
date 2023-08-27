import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Hero, Service, PlanetDescription } from "./components";
import StarsCanvas from "./components/canvas/Star";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="relative z-0">
        <Hero />

        {/* <StarsCanvas /> */}
      </div>
      <Service />
      <div></div>
    </div>
  );
};

export default App;
