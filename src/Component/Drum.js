import React from "react";

import { useEffect, useState } from "react";

function Drum(props) {
  const [currentState, setCurrentState] = useState(false);
  const play = () => {
    new Audio(props.sound).play();
    props.setText(props.name);
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == props.val.toLowerCase()) {
        play();
        setCurrentState(true);
        setTimeout(() => {
          setCurrentState(false);
        }, 300);
      }
    });
  }, []);
  return (
    <div
      className={`btn btn-outline m-2 btn-square bton ${
        currentState ? "playing" : ""
      }`}
      id={props.val}
      onClick={play}
    >
      <div className="key">{props.val}</div>
    </div>
  );
}

export default Drum;
