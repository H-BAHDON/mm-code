import React, { useState, createContext } from "react";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
import Header from "./Components/header/Header";
import "./css/style.css";
export const Themecontext = createContext(null);
function App() {
  const [Theme,setTheme]=useState("light")
 
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
  const toggletheme=()=>{
    setTheme((curr)=>curr==="light"?"dark":"light")
  }

  return (
    <>

  
      <Header
        handleHTMLClick={handleHTMLClick}
        handleJavaScriptClick={handleJavaScriptClick}
        handleCSSClick={handleCSSClick}
        id={Theme}
      />
      <div className={Theme}>
       <label class="switch">
        <input type="checkbox" onChange={toggletheme}/>

        <span class="slider round"></span>
      </label>
      <br/>
      <p className="titlemode">{Theme==='light'?"Light Mode": "Dark Mode"}</p>

      </div>
      <Main exerciseLanguage={exerciseLanguage} id={Theme}/>
      <Footer id={Theme}/>

    </>
  );
}

export default App;
