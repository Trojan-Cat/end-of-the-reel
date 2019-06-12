import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Title from "./Title";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router className=" ui Site backgrounds main ui container ">
        <div className="Site">
          <Title className=" large top " />
          <Navbar />

          <div className="ui container Site-content">
            <div className="ui horizontal divider " />

            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
          </div>

          <div className="bottom ui horizontal divider " />
          <Footer className="fixed bottom" />
        </div>
      </Router>
    );
  }
}

export default App;
