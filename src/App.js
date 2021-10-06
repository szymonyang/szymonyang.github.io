import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Particle from "./Component/Particle/Particle";
import HeaderContainer from "./Header/HeaderContainer/HeaderContainer";
import Home from "./Page/Home/Home";
import Error from "./Page/Error/Error";

import "./app.css";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Particle />

        <HeaderContainer />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
