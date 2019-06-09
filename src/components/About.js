import React from "react";
import ReactPlayer from "react-player";

class About extends React.Component {
  state = {
    playing: false,
    controls: true,
    width: "100%",
    height: "100%",
    pip: true,
    URL: "https://pinecast.com/feed/end-of-the-reel"
  };

  render() {
    const { playing, controls, width, height, pip } = this.state;
    return (
      <div>
        <ReactPlayer
          url="https://pinecast.com/listen/46030d36-3db8-4521-9177-a21b76128acd.mp3"
          playing={playing}
          controls={controls}
          pip={pip}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default About;
