import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Title from "./Title";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router className="backgrounds ui container">
        <Title />
        <Navbar />
        <div className="ui container">
          <div className="ui horizontal divider" />

          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
