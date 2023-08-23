import React from "react";
import { Navbar, Hero, Service } from "./components";
import StarsCanvas from "./components/canvas/Star";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-0">
        <Navbar />
        <Hero />

        <StarsCanvas />
      </div>
      <Service />
      <div></div>
    </div>
  );
};

export default App;
