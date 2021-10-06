import React from "react";
import { Container } from "semantic-ui-react";
import "./contacto.css";

const Contacto = () => (
  <Container text textAlign="center" id="contacto-container">
    <h1>Any question? Let's have a chat!</h1>
    <p style={{ textAlign: "left" }}>
      You could find me via Email / LinkedIn. Or we could have a coffee chat! I
      like iced long black with ice cream on top (That's a lotta calories).
    </p>
  </Container>
);

export default Contacto;
