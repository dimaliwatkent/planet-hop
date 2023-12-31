import {
  earth_moon,
  earth,
  jupiter,
  mars,
  mercury,
  venus,
  saturn,
  neptune,
  uranus,
} from "../assets";

export const navLinks = [
  {
    id: "explore",
    title: "Explore",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const planets = [
  {
    name: "Moon",
    price: 30000,
    distance: 38400,
    facts: "The Moon is Earth's only natural satellite.",
    description:
      "The Moon is a dusty and desolate place with a barren landscape. It has no atmosphere, which means there is no weather or air on the Moon. The surface is covered in craters, mountains, and plains called maria. Despite its desolation, the Moon has always been a source of fascination and inspiration for humanity.",
    image: earth_moon,
  },
  {
    name: "Mercury",
    price: 100000,
    distance: 57910000,
    facts: "Mercury is the closest planet to the Sun.",
    description:
      "Mercury is the smallest planet in the Solar System and has a rocky surface...",
    image: mercury,
  },
  {
    name: "Venus",
    price: 200000,
    distance: 108200000,
    facts:
      "Venus is the second planet from the Sun and is known as the 'Morning Star' or 'Evening Star'.",
    description:
      "Venus is often called Earth's 'sister planet' due to its similar size and composition...",
    image: venus,
  },
  {
    name: "Earth",
    price: 300000,
    distance: 149600000,
    facts:
      "Earth is the third planet from the Sun and is the only known planet to support life.",
    description:
      "Earth is home to a diverse range of ecosystems and is characterized by its blue oceans and green landscapes...",
    image: earth,
  },
  {
    name: "Mars",
    price: 400000,
    distance: 227900000,
    facts: "Mars is often called the Red Planet due to its reddish appearance.",
    description:
      "Mars is the fourth planet from the Sun and is known for its dusty, desert-like surface...",
    image: mars,
  },
  {
    name: "Jupiter",
    price: 500000,
    distance: 778500000,
    facts:
      "Jupiter is the largest planet in the Solar System and has a strong magnetic field.",
    description:
      "Jupiter is a gas giant and is known for its colorful bands of clouds and its Great Red Spot...",
    image: jupiter,
  },
  {
    name: "Saturn",
    price: 600000,
    distance: 1433000000,
    facts:
      "Saturn is known for its prominent ring system made up of ice particles and dust.",
    description:
      "Saturn is the sixth planet from the Sun and is a gas giant with a yellowish hue...",
    image: saturn,
  },
  {
    name: "Uranus",
    price: 700000,
    distance: 2877000000,
    facts:
      "Uranus is the seventh planet from the Sun and is tilted on its side.",
    description:
      "Uranus is an ice giant and has a bluish-green color due to the presence of methane in its atmosphere...",
    image: uranus,
  },
  {
    name: "Neptune",
    price: 800000,
    distance: 4503000000,
    facts: "Neptune is the eighth and farthest known planet from the Sun.",
    description:
      "Neptune is a gas giant and is known for its deep blue color and strong winds...",
    image: neptune,
  },
];
