import React, { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor({ userCode, setUserCode, initialCode }) {
  useEffect(() => {
    const stop = (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log(e);
    };

    const aceEditor = document.querySelector(".ace_editor");
    aceEditor.addEventListener("paste", stop, true);

    return () => {
      aceEditor.removeEventListener("paste", stop, true);
    };
  }, []);

  const handleCodeChange = (value) => {
    setUserCode(value);
  };

  return (
    <AceEditor
      mode="javascript"
      theme="dracula"
      fontSize={14}
      width="50%"
      height="46%"
      placeholder={initialCode}
      showPrintMargin={false}
      value={userCode}
      showGutter={true}
      editorProps={{ $blockScrolling: false }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 1,
      }}
      onChange={handleCodeChange}
    />
  );
}

export default CodeEditor;
