import React from "react";
import axios from "axios";
import Player from "./Player";
import ReactHtmlParser from "react-html-parser";

import GetFeed from "./GetFeed";

class Feed extends React.Component {
  state = {
    episodes: null,
    URL: "https://pinecast.com/feed/end-of-the-reel"
  };

  componentDidMount() {
    const eps = GetFeed(this.state.URL);
    // console.log(eps);
    //this.setState({ episodes: eps });

    //this.getFeed();
  }

  /* getFeed() {
    var parseString = require("xml2js").parseString;
    let URL = this.state.URL;

    axios.get(`${URL}`).then(response =>
      parseString(response.data, (err, result) => {
        const episodes = result.rss.channel[0].item;
        this.setState({ episodes: episodes });
      })
    );
  }
  */

  feed = () => {
    if (this.state.episodes === null) {
      return <div>Grabbing the Feed</div>;
    } else {
      return (
        <div className="ui container">
          {this.state.episodes.map(episode => (
            <div key={episode.link[0]} className="ui segment">
              <h2 className="ui header">{episode.title}</h2>
              <div> {ReactHtmlParser(episode.description)} </div>
              <br />
              <Player link={episode.link[0]} />
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>{this.feed()}</div>
      </div>
    );
  }
}

export default Feed;
