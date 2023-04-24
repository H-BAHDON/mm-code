import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';

function CodeEditor() {
  const [content, setContent] = useState('');

  const handleOnChange = (newContent) => {
    setContent(newContent);
  };

  const handleOnCopy = (event) => {
    event.preventDefault();
  };

  const handleOnCut = (event) => {
    event.preventDefault();
  };

  const handleOnPaste = (event) => {
    event.preventDefault();
  };

  return (
    <AceEditor
      mode="javascript"
      theme="dracula"
      fontSize={14}
      width="100%"
      height="100%"
      value={content}
      onChange={handleOnChange}
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      onCopy={handleOnCopy}
      onCut={handleOnCut}
      onPaste={handleOnPaste}
    />
  );
}

export default CodeEditor;