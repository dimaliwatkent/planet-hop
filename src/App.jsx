import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  Service,
  PlanetDescription,
  Contact,
  Explore,
  Gallery,
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
        <Route path="/:planetName" element={<PlanetDescription />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
