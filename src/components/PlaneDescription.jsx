import React from "react";
import { useParams } from "react-router-dom";
import { planets } from "../constants";

const PlanetDescription = () => {
  // Get the planet name from the route parameters
  const { name } = useParams();

  // Find the planet in the planets array
  const planet = planets.find(
    (planet) => planet.name.toLowerCase() === name.toLowerCase()
  );

  // If the planet wasn't found, display an error message
  if (!planet) {
    return <p>Planet not found</p>;
  }

  // Display the planet's details
  return (
    <div>
      <h1>{planet.name}</h1>
      <img src={planet.image} alt={planet.name} />
      <p>Price: ₱ {planet.price}</p>
      <p>Distance: {planet.distance}</p>
      <p>Fact: {planet.facts}</p>
      <p>Description: {planet.description}</p>
    </div>
  );
};

export default PlanetDescription;
