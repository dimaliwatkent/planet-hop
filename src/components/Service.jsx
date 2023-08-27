import React from "react";
import { planets } from "../constants";
import { styles } from "../styles";

const PlanetCard = ({
  index,
  name,
  price,
  distance,
  facts,
  description,
  image,
}) => {
  return (
    <div className="max-w-[325px] border-2 p-3 rounded-xl ">
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <div className="text-white ">
        <h3 className="text-2xl font-bold text-orange ">{name}</h3>
        <hr className="my-2" />
        <p>Price: ₱ {price}</p>
        <p>Distance: {distance}</p>
        <p>Fact: {facts}</p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
      <div>
        <h1 className={`${styles.serviceHeadText}`}>Services</h1>
        <p className={`${styles.serviceSubText}`}>
          Let your dreams transcend the boundaries of the universe!
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {planets.map((planets, index) => (
          <PlanetCard key={`planet-${index}`} index={index} {...planets} />
        ))}
      </div>
    </div>
  );
};

export default Service;
