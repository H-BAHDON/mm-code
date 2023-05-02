import React, { Component } from 'react';
import CodeEditor from './CodeEditor';
import Buttons from '../buttons/buttons'


class Body extends Component {
  render() {
    return (
      <div className="editor-container">
        <CodeEditor />
        <Buttons />
      </div>
    );
  }
}

export default Body;