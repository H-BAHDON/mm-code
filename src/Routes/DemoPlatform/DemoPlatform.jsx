import React, { useState } from "react";
import Header from '../../Components/header/Header';
import Main from '../../Components/demoMain/demoMain';

function Platform() {
  const [exerciseLanguage, setExerciseLanguage] = useState("Javascript");

  const noop = () => {}; 

  const handleHTMLClick = noop;

  const handleJavaScriptClick = () => {
    setExerciseLanguage("javascript");
  };

  const handleCSSClick = noop;

  const handleReactClick = noop;

  const handleSqlClick = noop;

  const handleTestClick = noop;

  return (
    <> 
      <Header
        handleHTMLClick={handleHTMLClick}
        handleJavaScriptClick={handleJavaScriptClick}
        handleCSSClick={handleCSSClick}
        handleReactClick={handleReactClick}
        handleSqlClick={handleSqlClick}
        handleTestClick={handleTestClick}
        showNavigation={false}
        showLogoBar={true}
      />
      <Main exerciseLanguage={exerciseLanguage} setExerciseLanguage={setExerciseLanguage} />
    </>
  )
}

export default Platform;
