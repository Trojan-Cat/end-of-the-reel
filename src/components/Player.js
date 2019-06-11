import React from "react";

const Player = props => {
  return (
    <div>
      <audio controls style={{ width: "100%" }}>
        <source src={props.link} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Player;
