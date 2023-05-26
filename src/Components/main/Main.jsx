import React, { useState, useEffect } from "react";
import DescriptionPanel from "../buttons/descriptionPanel";
import CodeEditor from "./CodeEditor";
import Buttons from "../buttons/buttons";
import Data from "../../test.json";
import Confetti from "react-confetti";

function Main({ exerciseLanguage }) {
  const [userCode, setUserCode] = useState("");
  const [initialCode, setInitialCode] = useState("");
  const [resultText, setResultText] = useState("");
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);
  const [nextButton, setNextButton] = useState(true);
  const [checkButton, setCheckButton] = useState(false);
  const [score, setScores] = useState(0);
  const [currentExerciseScore, setCurrentExerciseScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiShown, setConfettiShown] = useState(false); // New state variable

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
    const randomCodeScore = filteredData[randomIndex].score;
    setInitialCode(randomCode);
    setCurrentExerciseScore(randomCodeScore);
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
      setResultText(
        `Bravo! You did it. ${currentExerciseScore} score(s) for you!`
      );
      setNextButton(false);
      setCheckButton(true);
      const newScore = score + currentExerciseScore;
      setScores(newScore);

      // Check if the user's score is between 20 and 24 and the confetti hasn't been shown yet
      if (newScore >= 20 && newScore <= 24 && !confettiShown) {
        setShowConfetti(true);
        setConfettiShown(true); // Update the confettiShown state
        setResultText(`Wow you got ${newScore} scores so far. Well done!`);
      } else {
        setShowConfetti(false);
      }
    } else {
      setResultText("Sorry you are missing something! Keep Continue.");
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

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false); // Hide confetti after it completes
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
          <div className="result-text">
            <p className="">{resultText}</p>
            <p className="scores">Your Score(s): {score}</p>
          </div>
        </div>

        <CodeEditor
          userCode={userCode}
          setUserCode={setUserCode}
          initialCode={initialCode}
          exerciseLanguage={exerciseLanguage}
          showModal={showModal}
        />
        <Buttons
          handleCheckCode={handleCheckCode}
          handleResetCode={handleResetCode}
          initialCode={initialCode}
          checkButton={checkButton}
          showModal={showModal}
          onShowModal={handleShowModal}
          onCloseModal={handleCloseModal}
        />
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={300}
            gravity={0.1}
            onConfettiComplete={handleConfettiComplete}
          />
        )}
      </div>
    </main>
  );
}

export default Main;
