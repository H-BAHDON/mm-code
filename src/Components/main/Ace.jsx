import React, { Component } from 'react';
import AceEditor from 'react-ace';
import Action from './Action'

class Main extends Component { 
  render() {
    return (
      <div>
        <AceEditor  
        placeholder="<h1> BH </h1>" 
        mode="javascript"
        theme="monokai"  name="blah2"
        // onLoad={this.noCheating}
        // onChange={this.noCheating}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function something(editor) {
        console.log("Okay");
      }`}
        setOptions={{
        showLineNumbers: true,
        tabSize: 2,
        }}
        
          AceEditor.onCopy = function () { }
          AceEditor.onCut = function () { }
          AceEditor.onPaste = function () { }
          AceEditor.getCopyText = function () { }
        
        
        
  />
  
      </div>
    );
  }
}



export default Main;