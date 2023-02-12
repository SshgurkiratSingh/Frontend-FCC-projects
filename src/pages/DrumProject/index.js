import React from "react";
import "./index.css";
import { useState } from "react";
import Drum from "../../Component/Drum";
import clap from "./sounds/clap.wav";
import heater1 from "./sounds/Heater-1.mp3";
import heater2 from "./sounds/Heater-2.mp3";
import heater3 from "./sounds/Heater-3.mp3";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
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
    {
      name: "heater-2",
      sound: heater2,
      key: "E",
    },
    {
      name: "heater-3",
      sound: heater3,
      key: "A",
    },
    {
      name: "Tink",
      sound: tink,
      key: "S",
    },
    {
      name: "kick",
      sound: kick,
      key: "D",
    },
    {
      name: "openhat",
      sound: openhat,
      key: "Z",
    },
    {
      name: "snare",
      sound: snare,
      key: "X",
    },
    {
      name: "Ride",
      sound: ride,
      key: "C",
    },
  ]);
  const [text, setText] = useState("Press a Button or a related key");

  return (
    <>
      {" "}
      <center>
        <h1 className="block font-extrabold text-5xl ">React Drum Project</h1>
      </center>
      <div id="drum-machine">
        <center>
          <div id="display" className="display m-3 content-center	">
            {text}
          </div>
        </center>
        <div className="place-content-center btn-list m-2 flex">
          {sound.map((s, i) => (
            <Drum
              key={i}
              sound={s.sound}
              val={s.key}
              name={s.name}
              setText={setText}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DrumProject;
