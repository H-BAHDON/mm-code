import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';

function CodeEditor() {
  
  let sampleCode = `function Greeting() {
    console.log("Hello World");
  };`;

  return (

    <AceEditor
      mode="javascript"
      theme="dracula"
      fontSize={14}
      width= "50%"
      height= "46%"
      // placeholder={sampleCode}
      showPrintMargin={false}
      value = {sampleCode}
      showGutter={true}
      editorProps={{ $blockScrolling: false }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 1,
      }}
    />
  );
}

export default CodeEditor;