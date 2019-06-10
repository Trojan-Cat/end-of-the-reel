import React from "react";
//import ReactPlayer from "react-player";

const Player = props => {
  /*  const state = {
    playing: false,
    controls: true,
    width: "100%",
    height: "100%",
    pip: true
    // URL: "https://pinecast.com/feed/end-of-the-reel"
  };

  const { playing, controls, width, height, pip } = state;
  */
  /*
  return (
    <div>
      <ReactPlayer
        url={props.link}
        playing={playing}
        controls={controls}
        pip={pip}
        width={width}
        height={height}
      />
    </div>
  );
  */
  console.log(props.link);
  return (
    <audio controls>
      <source src={props.link} type="audio/mpeg" />
    </audio>
  );
};

export default Player;
