import React from "react";

const Player = props => {
  return (
    <audio controls>
      <source src={props.link} type="audio/mpeg" />
    </audio>
  );
};

export default Player;
