import React from "react";
import "./index.css";
import { useState } from "react";
import Drum from "../../Component/Drum";
import clap from "./sounds/clap.wav";
import heater1 from "./sounds/Heater-1.mp3";

function DrumProject() {
  const [sound, setSound] = useState([
    {
      name: "clap",
      sound: clap,
      key: "Q",
    },
    {
      name: "heater1",
      sound: heater1,
      key: "W",
    },
  ]);
  const [text, setText] = useState("Press a Button or a related key");

  return (
    <>
      {" "}
      <center>
        <h1 className="block font-extrabold text-5xl translate-y-12">
          React Drum Project
        </h1>
        <div id="drum-machine">
          <div id="display" className="display">
            {text}
          </div>
          {sound.map((s) => (
            <Drum
              key={s.key}
              sound={s.sound}
              val={s.key}
              name={s.name}
              setText={setText}
            />
          ))}
        </div>
      </center>
    </>
  );
}

export default DrumProject;
