import React from "react";
import ReactPlayer from "react-player";

class About extends React.Component {
  state = {
    playing: false,
    controls: true
  };

  render() {
    const { playing, controls } = this.state;
    return (
      <div>
        <ReactPlayer
          url="https://pinecast.com/listen/46030d36-3db8-4521-9177-a21b76128acd.mp3"
          playing={playing}
          controls={controls}
        />
      </div>
    );
  }
}

export default About;
