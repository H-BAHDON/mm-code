import React, { useState, useEffect } from "react";
import DescriptionPanel from "../buttons/descriptionPanel";
import CodeEditor from "./CodeEditor";
import Buttons from "../buttons/buttons";
import Data from "../../test.json";

function Main() {
  const [userCode, setUserCode] = useState("");
  const [initialCode, setInitialCode] = useState("");
  const [resultText, setResultText] = useState("");
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  useEffect(() => {
    // Get a random code from the test.json file
    const randomIndex = generateRandomExerciseIndex();
    const randomCode = Data[randomIndex].code;
    setInitialCode(randomCode);
  }, []);

  const generateRandomExerciseIndex = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * Data.length);
    } while (randomIndex === currentExerciseIndex); // Ensure the new index is different
    return randomIndex;
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
    } else {
      setResultText("Try again.");
    }
  };

  const handleResetCode = () => {
    setUserCode("");
    setResultText("");
  };

  const handleNextExercise = () => {
    const randomIndex = generateRandomExerciseIndex();
    const randomCode = Data[randomIndex].code;
    setCurrentExerciseIndex(randomIndex);
    setInitialCode(randomCode);
    setUserCode("");
    setResultText("");
  };

  return (
    <main>
      <div className="editor-container">
        <DescriptionPanel onNextExercise={handleNextExercise} />
        <p className="result-text">{resultText}</p>
        <CodeEditor
          userCode={userCode}
          setUserCode={setUserCode}
          initialCode={initialCode}
        />
        <Buttons
          handleCheckCode={handleCheckCode}
          handleResetCode={handleResetCode}
          initialCode={initialCode}
        />
      </div>
    </main>
  );
}

export default Main;
