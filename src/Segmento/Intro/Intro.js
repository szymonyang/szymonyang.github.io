import React from "react";
import Electro from "../../Component/Electro/Electro";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1>
          <span className="emoji wave" role="img" aria-label="hand wave"></span>
          Hi! This is Simon.
        </h1>

        <p> I'm a software engineer and full-stack development learner.</p>
      </div>
      <div className="intro-inner-container-flex">
        {/* <div className="intro-divider">
          <Horny />
        </div> */}
        <div className="intro-electro">
          <Electro />
        </div>
      </div>
    </div>
  );
};

export default Intro;
