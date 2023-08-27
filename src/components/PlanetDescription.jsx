import React from "react";
import { planets } from "../constants";
import { useParams } from "react-router-dom";

const PlanetDescription = () => {
  const { planetName } = useParams();
  const planet = planets.find((planet) => planet.name === planetName);

  if (!planet) {
    return <div>Planet not found</div>;
  }

  const { name, price, distance, facts, description, image } = planet;

  return (
    <div className="paddingX max-w-7xl mx-auto min-h-screen mt-10">
      <div>
        <div className="flex justify-center ">
          <img src={image} alt={name} className="w-96 h-96 object-contain" />
        </div>
        <h1 className="sectionHeadText">{name}</h1>
        <hr className="my-2" />
        <div className="text-white">
          <p>Price: ₱ {price}</p>
          <p>Distance: {distance}</p>
          <p>Fact: {facts}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetDescription;
