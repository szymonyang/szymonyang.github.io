import React from "react";
import { Container, Segment } from "semantic-ui-react";

import Intro from "../../Segmento/Intro/Intro";
import Main from "../../Segmento/Main/Main";

import "./home.css";

const Home = () => {
  return (
    <Container className="home-container">
      <Segment vertical basic>
        <Intro />
      </Segment>
      <Segment className="home-horny-segment">
        <Main />
      </Segment>
    </Container>
  );
};

export default Home;
