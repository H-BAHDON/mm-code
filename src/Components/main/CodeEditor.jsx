import React, { useEffect, useRef } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor({
  userCode,
  setUserCode,
  initialCode,
  exerciseLanguage,
  showModal,
  nextButton,
  skipButton,
  showGuide,
}) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!showModal) {
      // Focus the editor when the modal is closed
      editorRef.current?.editor.focus();
    }
  }, [showModal, nextButton, skipButton, showGuide]);

  useEffect(() => {
    editorRef.current?.editor.focus();
  }, []);

  const handleCodeChange = (value) => {
    setUserCode(value);
  };

  return (
    <AceEditor
      mode={exerciseLanguage}
      theme="dracula"
      fontSize={18}
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
      ref={editorRef} // Assign the ref to the AceEditor component
    />
  );
}

export default CodeEditor;
