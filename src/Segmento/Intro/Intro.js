import React, { useState } from "react";
import { Visibility } from "semantic-ui-react";
import Vscode from "../../../public/svg/vscode.svg";
import Electro from "../../Component/Electro/Electro";
import "./intro.css";

const Intro = () => {
  const [width, setWidth] = useState();

  const handleUpdate = (_, { calculations }) => {
    const { width } = calculations;
    setWidth(width);
  };
  return (
    <Visibility fireOnMount onUpdate={handleUpdate}>
      <div className="electro-mobile"></div>
      <div className="intro-container">
        <div className="intro-text">
          <h1>
            <span
              className="emoji wave"
              role="img"
              aria-label="hand wave"
            ></span>
            Hi! This is Simon.
          </h1>

          <p> I'm a software engineer and full-stack development learner.</p>
        </div>
        <div className="intro-inner-container-flex">
          {+width < 723 ? (
            <div className="electro-mobile">
              <Vscode />
            </div>
          ) : (
            <Electro />
          )}
        </div>
      </div>
    </Visibility>
  );
};

export default Intro;
