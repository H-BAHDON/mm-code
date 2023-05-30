import React, { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import Data from "../../test.json";
import Confetti from "react-confetti";
import ButtonOfPage from "../buttons/ButtonOfPage";

function Main({ exerciseLanguage }) {
  const [userCode, setUserCode] = useState("");
  const [initialCode, setInitialCode] = useState("");

  const [resultText, setResultText] = useState("");
  const [resultTextVisible, setResultTextVisible] = useState(true);
  const [resultTextClass, setResultTextClass] = useState("");

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);

  const [nextButton, setNextButton] = useState(false);
  // const [checkButton, setCheckButton] = useState(false);
  const [skipButton, setSkipButton] = useState(false);

  const [score, setScores] = useState(0);
  const [currentExerciseScore, setCurrentExerciseScore] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiShown, setConfettiShown] = useState(false);

  useEffect(() => {
    generateRandomCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseLanguage]);

  // useEffect(() => {
  //   // handleResetCode();
  // }, [exerciseLanguage]);

  const sentences = [
    `Bravo! You did it. ${currentExerciseScore} score(s) for you!`,
    `Great job! You earned ${currentExerciseScore} score(s)!`,
    `Congratulations! You completed the exercise and scored ${currentExerciseScore} point(s)!`,
    `Well done! You got ${currentExerciseScore} more score(s)! Keep it up!`,
  ];

  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  };

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
      const newScore = score + currentExerciseScore;
      setScores(newScore);
      const randomSentence = getRandomSentence();
      setResultText(randomSentence);
      setResultTextVisible(true);
      setResultTextClass("correct");
      setNextButton(true);
      // setCheckButton(false);

      // Check if the user's score is between 20 and 24 and the confetti hasn't been shown yet
      if (newScore >= 20 && newScore <= 24 && !confettiShown) {
        setShowConfetti(true);
        setConfettiShown(true); // Update the confettiShown state
        setResultText(`Wow you got ${newScore} scores so far. Well done!`);
      } else {
        setShowConfetti(false);
      }

      // Check if the user's score is between 10 and 14 and the confetti hasn't been shown yet
      if (newScore >= 10 && newScore <= 14 && !confettiShown) {
        setShowConfetti(true);
        setConfettiShown(true); // Update the confettiShown state
        setResultText(`Wow you got ${newScore} scores so far. Well done!`);
      } else if (newScore >= 15 && newScore <= 19) {
        setConfettiShown(false);
      }
    } else {
      setResultText("Sorry you are missing something! Keep Continue.");
      setResultTextVisible(true);
      setResultTextClass("wrong");
    }
  };

  // const handleResetCode = () => {
  //   setUserCode("");
  //   setResultText("");
  //   setNextButton(true);
  //   setCheckButton(false);
  // };

  const handleNextExercise = () => {
    generateRandomCode();
    setUserCode("");
    setNextButton(false);
    setResultTextVisible(false);
    // setCheckButton(false);
  };

  const handleSkipExercise = () => {
    setResultTextVisible(false);
    generateRandomCode();
    setUserCode("");
    setNextButton(false);
    // setCheckButton(false);

    setSkipButton(!skipButton);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowGuide = () => {
    setShowGuide(true);
  };

  const handleCloseGuide = () => {
    setShowGuide(false);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false); // Hide confetti after it completes
  };
  return (
    <main>
      <div className="guide-button">
        <ButtonOfPage
          nameButton="Guide"
          handle={handleShowGuide}
          styleButton={"btn-success"}
        />
      </div>
      <div className="editor-container">
        <div className="main-top">
          <ButtonOfPage
            nameButton="What's The Code"
            handle={handleShowModal}
            styleButton={"btn-success"}
          />
          <ButtonOfPage
            nameButton="Skip"
            handle={handleSkipExercise}
            styleButton={"btn-success"}
          />
          <ButtonOfPage
            nameButton={nextButton ? "Next Exercise" : "Check Code"} // Change button text dynamically
            handle={nextButton ? handleNextExercise : handleCheckCode} // Toggle between handle functions
            styleButton={nextButton ? "btn-primary" : "btn-success"}
          />
        </div>
        <div className="main-center">
          <CodeEditor
            userCode={userCode}
            setUserCode={setUserCode}
            initialCode={initialCode}
            exerciseLanguage={exerciseLanguage}
            showModal={showModal}
            nextButton={nextButton}
            skipButton={skipButton}
            showGuide={showGuide}
          />
        </div>
        <div className="main-bottom">
          {/* <ButtonOfPage nameButton="Reset" handle={handleResetCode} /> */}

          <p
            className={`scores-text ${
              resultTextVisible ? "fade-in" : "fade-out"
            }
            ${resultTextClass}`}
          >
            {resultText}
          </p>
          <p className="scores">Your Score(s): {score}</p>
        </div>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={300}
            gravity={0.1}
            confettiProps={{ run: 4 }}
            onConfettiComplete={handleConfettiComplete}
          />
        )}
        {showModal && (
          <div className="modal">
            <div className="modal-overlay" onClick={handleCloseModal}></div>
            <div className="modal-content">
              <div className="modal-header">
                <h3>Code</h3>
              </div>
              <div className="modal-body">
                <pre>{initialCode}</pre>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {showGuide && (
          <div className="modal" onClick={handleCloseGuide}>
            <div className="modal-content">
              <h2>Guide</h2>
              <p>
                - Each exercise will give you a different score depending on
                it's difficulty.
                <br />
                <br />
                - This score will range from 1-5 per exercise.
                <br />
                <br />
                - The 'Next Exercise' button will be enabled once your code has
                been verified using the 'Check Code' button.
                <br />
                <br />
                - Use the button 'What's The Code' to view the code again.
                <br />
                <br />
                - Use the 'Skip' button to skip an exercise.
                <br />
                <br />
                - You will not be able to paste code on this editor!
                <br />
                <br />- If you refresh the website, all scores will be lost!
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
