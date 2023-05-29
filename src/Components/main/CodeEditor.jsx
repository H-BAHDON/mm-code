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

  useEffect(() => {
    const stop = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };

    const aceEditor = document.querySelector(".ace_editor");
    aceEditor.addEventListener("paste", stop, true);

    return () => {
      aceEditor.removeEventListener("paste", stop, true);
    };
  }, []);

  return (
    <div className="editor">
      <AceEditor
        mode={exerciseLanguage}
        theme="dracula"
        fontSize={18}
        width="100%"
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
        onLoad={(editor) => {
          editor.textInput.getElement().ariaLabel = "editorTextarea";
        }}
        onChange={handleCodeChange}
        ref={editorRef} // Assign the ref to the AceEditor component
      />
    </div>
  );
}

export default CodeEditor;
