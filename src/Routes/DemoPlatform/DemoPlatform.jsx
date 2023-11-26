import React, { useState } from "react";
import Header from '../../Components/header/Header';
import Main from '../../Components/main/Main';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"

function DemoPlatform() {
  const [exerciseLanguage, setExerciseLanguage] = useState("Javascript");
  const navigate = useNavigate();
  const { user } = useAuth();

  const noop = () => {}; 

  const handleHTMLClick = () => {
    if (user) {
      setExerciseLanguage("html");
    } else {
      const signIn = window.confirm("You need to sign in");
      if (signIn) {
        // Add logic to navigate to the sign-in page
        navigate("/login");
      }
    }
  };

  const handleJavaScriptClick = () => {
    setExerciseLanguage("javascript");
  };

  const handleCSSClick = () => {
    if (user) {
      setExerciseLanguage("css");
    } else {
      const signIn = window.confirm("You need to sign in");
      if (signIn) {
        // Add logic to navigate to the sign-in page
        navigate("/login");
      }
    }
  };

  const handleReactClick = () => {
    if (user) {
      setExerciseLanguage("react");
    } else {
      const signIn = window.confirm("You need to sign in");
      if (signIn) {
        // Add logic to navigate to the sign-in page
        navigate("/login");
      }
    }
  };

  const handleSqlClick = () => {
    if (user) {
      setExerciseLanguage("sql");
    } else {
      const signIn = window.confirm("You need to sign in");
      if (signIn) {
        // Add logic to navigate to the sign-in page
        navigate("/login");
      }
    }
  };

  const handleTestClick = () => {
    if (user) {
      setExerciseLanguage("test");
    } else {
      const signIn = window.confirm("You need to sign in");
      if (signIn) {
        // Add logic to navigate to the sign-in page
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/platform");
    } else {
      navigate("/demo");
    }
  }, [user, navigate]);

  console.log("exerciseLanguage:", exerciseLanguage);

  return (
    <> 
      <Header
        handleJavaScriptClick={handleJavaScriptClick}
        handleHTMLClick={handleHTMLClick}
        handleCSSClick={handleCSSClick}
        handleReactClick={handleReactClick}
        handleSqlClick={handleSqlClick}
        handleTestClick={handleTestClick}
        showNavigation={true}
        showLogoBar={true}
      />
      <Main exerciseLanguage={exerciseLanguage} setExerciseLanguage={setExerciseLanguage} />
    </>
  )
}

export default DemoPlatform;
