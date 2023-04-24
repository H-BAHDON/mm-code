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

  const handleOnContextMenu = (event) => {
    event.preventDefault();
  };

  const handleOnKeyDown = (event) => {
    // Disable all keyboard shortcuts except Ctrl+A, Ctrl+Z, Ctrl+Y, and Ctrl+X
    if ((event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey) {
      const keyCode = event.keyCode || event.which || event.charCode;
      if (keyCode !== 65 && keyCode !== 90 && keyCode !== 89 && keyCode !== 88) {
        event.preventDefault();
      }
    }
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
      onContextMenu={handleOnContextMenu}
      onKeyDown={handleOnKeyDown}
    />
  );
}

export default CodeEditor;