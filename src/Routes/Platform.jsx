import React, { useState } from "react";
import Header from '../Components/header/Header';
import Main from '../Components/main/Main';
import Footer from '../Components/Footer/Footer';

function Platform() {

const [exerciseLanguage, setExerciseLanguage] = useState("html");

  const handleHTMLClick = () => {
    setExerciseLanguage("html");
  };

  const handleJavaScriptClick = () => {
    setExerciseLanguage("javascript");
  };

  const handleCSSClick = () => {
    setExerciseLanguage("css");
  };

  const handleReactClick= () => {
    setExerciseLanguage("react")
  }

  const handleSqlClick = () =>{
    setExerciseLanguage("sql")
  }
  const handleTestClick = () =>{
    setExerciseLanguage("test")
  }

  return (
   <>
    <Header
        handleHTMLClick={handleHTMLClick}
        handleJavaScriptClick={handleJavaScriptClick}
        handleCSSClick={handleCSSClick}
        handleReactClick={handleReactClick}
        handleSqlClick={handleSqlClick}
        handleTestClick={handleTestClick}
      />
      <Main exerciseLanguage={exerciseLanguage} />
      <Footer />

   </>
  )
}

export default Platform