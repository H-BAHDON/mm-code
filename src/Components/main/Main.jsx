import React from 'react';
import Body from './Body';
import CodeEditor from './CodeEditor';

function Main() {
  const handleOnCopy = (event) => {
    event.preventDefault();
  }

  const handleOnPaste = (event) => {
    event.preventDefault();
  }

  return (
    <main>
      <section className="mainPanel">
        <div className="panel-Description">
          <h1>HTML Structure</h1>
          <p>The code below and the information box on the right hand side will always disappear when you're typing your code.
          This will help your visual memory along side the exercise improving your muscle
            memory! It's all for your benefit!</p>
          <button className="nextExercise btn btn-primary" type="button">Next exercise</button>
        </div>
        <Body />
        {/* <CodeEditor />
        <div className="editor-container">
          <div id="editor" onCopy={handleOnCopy} onPaste={handleOnPaste}></div>
        </div>
        <div className="button">
          <button className="doneButton btn btn-success" type="button">Begin</button>
          <button className="checkButton btn btn-success" type="button" hidden="hidden">Check code</button>
        </div> */}
      </section>
    </main>
  )
}

export default Main;