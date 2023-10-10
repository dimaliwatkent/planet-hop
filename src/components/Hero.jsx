import React from "react";
import ShipCanvas from "./canvas/Ship";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="justify-items-center ">
          <h1 className="heroHeadText">
            Experience the <span className="text-blue">Universe</span>
          </h1>

          <p className="heroSubText mt-2">
            Ready for an adventure that defies all limits?
            <br className="sm:block hidden" />
            Look no further than Planet Hop, the interstellar transportation
            <br className="sm:block hidden" />
            company that will take you to the furthest corners of the universe
            in a flash.
          </p>
          <button className="bg-blue py-2 px-5 rounded-xl outline-none w-fit text-primary font-semibold shadow-md shadow-primary mt-10">
            Explore
          </button>

          <div className="lg:w-[600px] lg:h-[500px] h-[400px] lg:absolute bottom-0 right-0 mx-auto relative ">
            <ShipCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
