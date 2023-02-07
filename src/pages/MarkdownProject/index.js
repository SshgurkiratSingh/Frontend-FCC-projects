import React from "react";
import "./index.css";
function MarkDownProject() {
  return (
    <>
      <center className="main">
        <div>
          <div className="textBox">Enter The Text in markdown</div>
          <textarea
            id="editor"
            name="text"
            rows="10"
            className="textbox"
            columns="800"
          ></textarea>
        </div>
        <div id="preview" className="mockup-code"></div>
      </center>
    </>
  );
}

export default MarkDownProject;
