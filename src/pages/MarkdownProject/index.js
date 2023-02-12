import { marked } from "marked";
import React, { useState } from "react";
import "./index.css";
function MarkDownProject() {
  const [text, setText] = useState(`# Welcome to my FCC Frontend Project!

## It contain all the project to be done in FCC Frontend Course...
### Some Test Below:

Heres some code, \`GurkirAT\`, between 2 backticks.

\`\`\`
// this is example of code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

My name in Bold will look like **Gurirat**
Or italic _Gurkirat_.
Or Both **_Gurkirat!_**
 ~~hIII~~.

my Github [clickme](http://github.com/sshgurkiratsingh), and
> !

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <center className="main">
        <div>
          <div className="textBox">Enter The Text in markdown</div>
          <textarea
            id="editor"
            name="text"
            rows="10"
            onChange={handleChange}
            value={text}
            className="textbox"
            columns="800"
          ></textarea>
        </div>
        <div
          id="preview"
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />
      </center>
    </>
  );
}

export default MarkDownProject;
