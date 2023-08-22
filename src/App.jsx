import React from "react";
import { Navbar, Hero } from "./components";
import StarsCanvas from "./components/canvas/Star";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="flex">
        <Navbar />
        <Hero />
      </div>
      <div>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
