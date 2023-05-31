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
  checkButton,
}) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!showModal) {
      // Focus the editor when the modal is closed
      editorRef.current?.editor.focus();
    }
  }, [showModal, nextButton, skipButton, showGuide, checkButton,exerciseLanguage]);

  useEffect(() => {
    editorRef.current?.editor.focus();
  }, []);

   useEffect(() => {
     if (
       exerciseLanguage
     ) {
       // Clear the editor when exerciseLanguage changes
       setUserCode("");
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [exerciseLanguage]);

  const handleCodeChange = (value) => {
    if (!showModal && !showGuide) {
      setUserCode(value);
    }
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
        fontSize={17}
        width="100%"
        placeholder={initialCode}
        className="placeholder-color"
        showPrintMargin={false}
        value={userCode}
        showGutter={true}
        editorProps={{ $blockScrolling: false }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 1,
          readOnly: showModal || showGuide, // Make the editor read-only when the modal is open
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
