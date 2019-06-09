import React from "react";
import axios from "axios";
//import xml2js from "xml2js";

class getFeed extends React.Component {
  state = {
    episodes: null,
    URL: "https://pinecast.com/feed/end-of-the-reel"
  };

  getFeed() {
    var parseString = require("xml2js").parseString;
    let URL = this.state.URL;

    axios.get(`${URL}`).then(response =>
      parseString(response.data, (err, result) => {
        const episodes = result.rss.channel[0].item;

        this.setState({ episodes: episodes });
        console.log(this.state.episodes);
      })
    );
  }

  displayTest = () => {
    if (this.state.episodes === null) {
      return <div>Enter some dates to find out what is best to wear</div>;
    } else {
      return <li>{JSON.stringify(this.state.episodes[0].title)}</li>;
    }
  };

  render() {
    return (
      <div>
        <button onClick={() => this.getFeed()}>Click</button>
        <div>{this.displayTest()}</div>
      </div>
    );
  }
}

export default getFeed;
