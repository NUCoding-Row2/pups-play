import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pups from "./pages/Pups";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Pups} />
        <Route exact path="/Pups" component={Pups} />
        <Route exact path="/Pups/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
