import React, { Component } from 'react';
// import AceEditor from 'react-ace';
import CodeEditor from './CodeEditor';

class Body extends Component {
  handleOnCopy = (e) => {
    e.preventDefault();
  }

  handleOnCut = (e) => {
    e.preventDefault();
  }

  handleOnPaste = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        {/* <AceEditor
          placeholder="<h1> BH </h1>"
          mode="javascript"
          theme="monokai"
          name="blah2"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          onCopy={this.handleOnCopy}
          onCut={this.handleOnCut}
          onPaste={this.handleOnPaste}
          value={`function something(editor) {
            console.log("Okay")
          }`}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
        /> */}
        <CodeEditor />
      </div>
    );
  }
}

export default Body;