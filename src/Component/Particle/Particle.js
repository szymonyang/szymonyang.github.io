import React from "react";
import Particles from "react-tsparticles";

import options from "./options";
import "./particle.css";

const Particle = () => {
  return <Particles id="tsparticles" options={{ ...options }} />;
};

export default Particle;
