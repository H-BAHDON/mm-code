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

  const [nextButton, setNextButton] = useState(false);
  const [checkButton, setCheckButton] = useState(false);
  const [skipButton, setSkipButton] = useState(false);

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);
  const [score, setScores] = useState(0);
  const [currentExerciseScore, setCurrentExerciseScore] = useState(0);
  const [currentExerciseExplanation, setCurrentExerciseExplanation] = useState("")

  const [showModal, setShowModal] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiShown, setConfettiShown] = useState(false);

  const handleKeyPress = (event) => {
    if (event.altKey && event.key === 'Shift') {
      setShowModal((prevShowModal) => !prevShowModal);
    }
  };

    useEffect(() => {
      generateRandomCode()
      setResultTextVisible(false);
      setNextButton(false)
      setCheckButton(false)

      let scores = localStorage.getItem("score");
      if (scores) {
        setScores(parseInt(scores));
      }

      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };    
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exerciseLanguage]);

    useEffect(() => {
      localStorage.setItem("score", score.toString());
    }, [score]);
  

  // useEffect(() => {
  //   // handleResetCode();
  // }, [exerciseLanguage]);

  const sentences = [
    `Bravo! You did it. ${currentExerciseScore} ${
      currentExerciseScore === 1 ? "point" : "points"
    } for you!`,
    `Great job! You earned ${currentExerciseScore} ${
      currentExerciseScore === 1 ? "point" : "points"
    }!`,
    `Congratulations! You completed the exercise and scored ${currentExerciseScore} ${
      currentExerciseScore === 1 ? "point" : "points"
    }!`,
    `Well done! You got ${currentExerciseScore} more ${
      currentExerciseScore === 1 ? "point" : "points"
    }! Keep it up!`,
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
    const randomCodeExplanation = filteredData[randomIndex].explanation;
    setInitialCode(randomCode);
    setCurrentExerciseScore(randomCodeScore);
    setCurrentExerciseIndex(randomIndex);
    setCurrentExerciseExplanation(randomCodeExplanation)
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
      setCheckButton(true);

      // Check if the user's score is between 20 and 24 and the confetti hasn't been shown yet
      if (
        (newScore >= 20 && newScore <= 24 && !confettiShown) ||
        (newScore >= 30 && newScore <= 34 && !confettiShown) ||
        (newScore >= 40 && newScore <= 44 && !confettiShown) ||
        (newScore >= 50 && newScore <= 54 && !confettiShown) ||
        (newScore >= 60 && newScore <= 64 && !confettiShown) ||
        (newScore >= 70 && newScore <= 74 && !confettiShown) ||
        (newScore >= 80 && newScore <= 84 && !confettiShown) ||
        (newScore >= 90 && newScore <= 94 && !confettiShown)
      ) {
        setShowConfetti(true);
        setConfettiShown(true); // Update the confettiShown state
        setResultText(`Wow you got ${newScore} score so far. Well done!`);
      } else {
        setShowConfetti(false);
      }

      // Check if the user's score is between 10 and 14 and the confetti hasn't been shown yet
      if (newScore >= 10 && newScore <= 14 && !confettiShown) {
        setShowConfetti(true);
        setConfettiShown(true); // Update the confettiShown state
        setResultText(`Wow you got ${newScore} score so far. Well done!`);
      } else if (
        (newScore >= 15 && newScore <= 19) ||
        (newScore >= 25 && newScore <= 29) ||
        (newScore >= 35 && newScore <= 39) ||
        (newScore >= 45 && newScore <= 49) ||
        (newScore >= 55 && newScore <= 59) ||
        (newScore >= 65 && newScore <= 69) ||
        (newScore >= 75 && newScore <= 79) ||
        (newScore >= 85 && newScore <= 89) ||
        (newScore >= 95 && newScore <= 99)
      ) {
        setConfettiShown(false);
      }
    } else {
      setResultText("Sorry you are missing something! Keep Continue.");
      setResultTextVisible(true);
      setResultTextClass("wrong");
      setCheckButton(false);
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
    setCheckButton(false);
  };

  const handleSkipExercise = () => {
    setResultTextVisible(false);
    generateRandomCode();
    setUserCode("");
    setNextButton(false);
    setCheckButton(false)
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
          styleButton={"btn-warning"}
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
            handleBoolean={checkButton}
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
            checkButton={checkButton}
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
          <p className="score">Your Score: {score}</p>
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
                <div className="modal-header">
                  <h3>Explanation</h3>
                </div>
                <p>{currentExerciseExplanation}</p>
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
            <div className="modal-overlay" onClick={handleCloseGuide}></div>
            <div className="modal-content">
              <h2>Guide Me!</h2>
              <p>
                - Select the language you will like to improve your muscle memory on using the options on the navbar.
                <br />
                <br />
                - You will gain 2 points for each successful exercise!
                <br />
                <br />
                - Use the button 'What's The Code' to view the code again.
                <br />
                <br />
                - Once your code has been verified using the 'Check Code' button, the 
                'Check Code' button will turn into a 'Next Exercise' button.
                <br />
                <br />
                - Use the 'Skip' button to skip any exercise.
                <br />
                <br />
                - You will not be able to paste code on this editor!
                <br />
                <br />
                - Your score will be reset every 24 hours!
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
