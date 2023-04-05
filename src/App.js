import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
