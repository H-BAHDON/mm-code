import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
import Header from "./Components/header/Header";
import "./css/style.css";

function App() {
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

  return (
    <>
      <Header
        handleHTMLClick={handleHTMLClick}
        handleJavaScriptClick={handleJavaScriptClick}
        handleCSSClick={handleCSSClick}
      />
      <Main exerciseLanguage={exerciseLanguage} />
      <Footer />
    </>
  );
}

export default App;
