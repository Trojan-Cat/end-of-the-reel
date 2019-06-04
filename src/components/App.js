import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Navbar
          onItemClick={selected => this.setState({ activeItem: selected })}
          isActive={this.state.activeItem}
        />
        <div className="ui container">
          <div className="ui">stuff</div>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
