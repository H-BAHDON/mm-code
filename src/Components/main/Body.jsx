import React, { Component } from 'react';
import CodeEditor from './CodeEditor';

class Body extends Component {
  render() {
    return (
      <div className="editor-container">
        <CodeEditor />
          <button className="doneButton btn btn-success" type="button">Begin</button>
          <button className="checkButton btn btn-success" type="button" hidden="hidden">Check code</button>
        </div>
    );
  }
}

export default Body;