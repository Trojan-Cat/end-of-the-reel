import React from "react";
import axios from "axios";
import xml2js from "xml2js";

class getFeed extends React.Component {
  state = {
    rssFeed: [],
    URL: "https://pinecast.com/feed/end-of-the-reel"
  };

  getFeed() {
    var parseString = require("xml2js").parseString;

    //var xml = "<root>Hello xml2js!</root>"
    //parseString(xml, function (err, result) {
    //  console.dir(result);

    let URL = this.state.URL;

    axios.get(`${URL}`).then(response => {
      //console.log(response.data);
      parseString(response.data, function(err, result) {
        console.log(result.rss.channel[0]);
        this.setState({ rssFeed: result.rss.channel[0] });
      });
      //  this.setState({ rssFeed: response.data });
    });
  }

  render() {
    const { rssFeed } = this.state;
    return (
      <div>
        <button onClick={() => this.getFeed()}>Click</button>
        <div>RSS FEED</div>
      </div>
    );
  }
}

export default getFeed;
