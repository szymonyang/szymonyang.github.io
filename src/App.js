import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import Particle from "./Component/Particle/Particle";

import HeaderContainer from "./Header/HeaderContainer/HeaderContainer";
import Home from "./Page/Home/Home";

import {
  Header,
  Button,
  Container,
  Grid,
  Segment,
  Image,
  Icon,
} from "semantic-ui-react";

import "./app.css";

const App = () => {
  return (
    <React.StrictMode>
      <Particle />
      <HeaderContainer />
      <Home />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
