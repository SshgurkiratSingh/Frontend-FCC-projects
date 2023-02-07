import React from "react";

import { useEffect, useState } from "react";

function Drum(props) {
  const play = () => {
    new Audio(props.sound).play();
    props.setText(props.name);
  };

  return (
    <div className={"btn btn-outline btn-square"} onClick={play}>
      <div className="key">{props.val}</div>
    </div>
  );
}

export default Drum;
