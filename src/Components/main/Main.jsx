import React, { useState, useEffect } from "react";
import DescriptionPanel from "../buttons/descriptionPanel";
import CodeEditor from "./CodeEditor";
import Buttons from "../buttons/buttons";
import Data from "../../test.json";

function Main({ exerciseLanguage }) {
  const [userCode, setUserCode] = useState("");
  const [initialCode, setInitialCode] = useState("");
  const [resultText, setResultText] = useState("");
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);
  const [nextButton, setNextButton] = useState(true);
  const [checkButton, setCheckButton] = useState(false);
  const [score, setScores] = useState(0)

  useEffect(() => {
    generateRandomCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseLanguage]);

  useEffect(() => {
    handleResetCode();
  }, [exerciseLanguage]);

  const generateRandomCode = () => {
    const filteredData = Data.filter(
      (exercise) => exercise.lang === exerciseLanguage
    );
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * filteredData.length);
    } while (randomIndex === currentExerciseIndex);
    const randomCode = filteredData[randomIndex].code;
    setInitialCode(randomCode);
    setCurrentExerciseIndex(randomIndex);
  };

  const handleCheckCode = () => {
    // Define the expected code
    const expectedCode = initialCode;

    // Remove spaces, convert to lowercase, and replace quotes for comparison
    const formattedUserCode = userCode
      .replace(/\s/g, "")
      .toLowerCase()
      .replace(/['"]/g, "");
    const formattedExpectedCode = expectedCode
      .replace(/\s/g, "")
      .toLowerCase()
      .replace(/['"]/g, "");

    // Check if the formatted user code matches the formatted expected code
    if (formattedUserCode === formattedExpectedCode) {
      setResultText("Bravo! You did it.");
      setNextButton(false);
      setCheckButton(true)
    } else {
      setResultText("Try again.");
    }
  };

  const handleResetCode = () => {
    setUserCode("");
    setResultText("");
    setNextButton(true);
    setCheckButton(false);
  };

  const handleNextExercise = () => {
    generateRandomCode();
    setUserCode("");
    setResultText("");
    setNextButton(true);
    setCheckButton(false);
  };

  const handleSkipExercise = () => {
    generateRandomCode();
    setUserCode("");
    setResultText("");
    setNextButton(true);
    setCheckButton(false);
  };

  return (
    <main>
      <div className="editor-container">
        <DescriptionPanel
          onNextExercise={handleNextExercise}
          onSkipExercise={handleSkipExercise}
          nextButton={nextButton}
        />
        <div className="results">
          <p className="result-text">{resultText}</p>
          <p className="scores">Your Score(s): {score}</p>
        </div>

        <CodeEditor
          userCode={userCode}
          setUserCode={setUserCode}
          initialCode={initialCode}
          exerciseLanguage={exerciseLanguage}
        />
        <Buttons
          handleCheckCode={handleCheckCode}
          handleResetCode={handleResetCode}
          initialCode={initialCode}
          checkButton={checkButton}
        />
      </div>
    </main>
  );
}

export default Main;
