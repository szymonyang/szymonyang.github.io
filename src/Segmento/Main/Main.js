import React from "react";
import { Grid, Container } from "semantic-ui-react";

import Cummie from "../../../public/svg/cummie.svg";
import Smack from "../../../public/svg/smack.svg";
import "./main.css";

const Main = () => {
  return (
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <h1 className="main-h1">I like creating things</h1>
          <p>
            I like experimenting on the knowledge I learned outside 9-5, by
            practicing it. The latest project I am working on is a virtual
            health assistant,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wchck.herokuapp.com/"
              className="slurp"
            >
              WeCheck
            </a>
            .
          </p>
          <p>
            I build it with React, Node, and Socket.IO, with some extra "spice",
            such as Hooks, Context, and SSR.
          </p>
          <button className="learn-more">More about WeCheck</button>
        </Grid.Column>
        <Grid.Column width={8}>
          <div id="bussy">
            <Cummie />
          </div>
        </Grid.Column>
      </Grid.Row>

      {/* <Grid.Row id="power-button-grid">
        <Grid.Column textAlign="center">
          <button className="learn-more">Learn more about WeCheck</button>
        </Grid.Column>
      </Grid.Row> */}

      <Grid.Row>
        <Grid.Column width={8}>
          <div id="smack">
            <Smack />
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <h1 className="main-h1">I like learning things</h1>
          <p>
            I am currently learning serverless framework and AWS Lambda with my
            senior colleagues.
          </p>
          <p>
            Outside 9-5, I like venturing into myriads of hobbies beyond my
            profession, including photography, street dance and UI/UX design.
          </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Container text textAlign="center">
            <h1>Any question? Let's have a chat!</h1>
            <p style={{ textAlign: "left" }}>
              You could find me via Email / LinkedIn. Or we could have a coffee
              chat! I like iced long black with ice cream on top (That's a lotta
              calories).
            </p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Main;
