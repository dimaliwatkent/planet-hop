import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  Service,
  PlanetDescription,
  Contact,
} from "./components";
import StarsCanvas from "./components/canvas/Star";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <StarsCanvas />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <Service />
            </>
          }
        />
        <Route path="/planet/:planetName" element={<PlanetDescription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
