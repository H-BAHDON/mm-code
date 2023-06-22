import React, { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import Confetti from "react-confetti";
import ButtonOfPage from "../buttons/ButtonOfPage";

// ---------------------------
// import exercises
import htmlData from "../../Exercise/htmlExercise.json"
import cssData from "../../Exercise/cssExercise.json"
import reactData from "../../Exercise/reactExercise.json"
import javascriptData from "../../Exercise/javascriptExercise.json"
import SQLData from "../../Exercise/SqlExercise.json"
import testData from "../../Exercise/testExercise.json"
// ---------------------------

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
    `Good stuff! Improving your muscle memory could be one of the most important things in learning. You have earned ${currentExerciseScore} points!`,
    `Outstanding performance! You have gained ${currentExerciseScore} points!`,
    `Do you feel like you're improving!? Keep going and you definitely will be! ${currentExerciseScore} points achieved!`,
    `Admirable job! You have added ${currentExerciseScore} more points to your score. Keep going!`,
  ];


  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  };
  //


  const generateRandomCode = () => {
    let filteredData;
    let data;

    if (exerciseLanguage === "javascript" || exerciseLanguage === "react" || exerciseLanguage === "test") {
      if (exerciseLanguage === "test") {
        data = testData;
      } else {
        data = exerciseLanguage === "javascript" ? javascriptData : reactData;
      }
      filteredData = data.filter((exercise) => exercise.lang === exerciseLanguage);
    } else if (exerciseLanguage === "html") {
      filteredData = htmlData.filter((exercise) => exercise.lang === exerciseLanguage);
    } else if (exerciseLanguage === "css") {
      filteredData = cssData.filter((exercise) => exercise.lang === exerciseLanguage);
    } else if (exerciseLanguage === "sql") {
      filteredData = SQLData.filter((exercise) => exercise.lang === exerciseLanguage);
    } else {
      return;
    }

    if (!filteredData || filteredData.length === 0) {
      return;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * filteredData.length);
    } while (randomIndex === currentExerciseIndex);

    const randomExercise = filteredData[randomIndex];
    if (!randomExercise || typeof randomExercise.code !== 'string') {
      return;
    }

    const randomCode = randomExercise.code;
    const randomCodeScore = randomExercise.score;
    const randomCodeExplanation = randomExercise.explanation;

    setInitialCode(randomCode);
    setCurrentExerciseScore(randomCodeScore);
    setCurrentExerciseIndex(randomIndex);
    setCurrentExerciseExplanation(randomCodeExplanation);
  };



  const handleCheckCode = () => {
    let expectedCode;
    if (exerciseLanguage === "javascript") {
      expectedCode = initialCode;
    } else if (exerciseLanguage === "react") {
      const filteredData = reactData.filter((exercise) => exercise.lang === exerciseLanguage);
      expectedCode = filteredData[currentExerciseIndex].code;
    } else if (exerciseLanguage === "html") {
      const filteredData = htmlData.filter((exercise) => exercise.lang === exerciseLanguage);
      expectedCode = filteredData[currentExerciseIndex].code;
    } else if (exerciseLanguage === "css") {
      const filteredData = cssData.filter((exercise) => exercise.lang === exerciseLanguage);
      expectedCode = filteredData[currentExerciseIndex].code;
    }else if (exerciseLanguage === "sql") {
      const filteredData = SQLData.filter((exercise) => exercise.lang === exerciseLanguage);
      expectedCode = filteredData[currentExerciseIndex].code;
    }else if (exerciseLanguage === "test") {
      const filteredData = testData.filter((exercise) => exercise.lang === exerciseLanguage);
      expectedCode = filteredData[currentExerciseIndex].code;
    } else {
      return;
    }

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

      // Check if the user's score is a multiple of 10 and the confetti hasn't been shown yet
      if (newScore % 10 === 0 && !confettiShown) {
        setShowConfetti(true);
        setConfettiShown(true); // Update the confettiShown state
        setResultText(`Wow you got ${newScore} score so far. Well done!`);
      } else {
        setShowConfetti(false);
      }

      // Check if the user's score is not a multiple of 10 and the confetti has been shown
      if (newScore % 10 !== 0 && confettiShown) {
        setConfettiShown(false); // Update the confettiShown state
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
          nameButton="Guide Me!"
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
              <h2>Your Guide 📜</h2>
              <p>
                🔳 Select a language from the navbar to enhance your muscle memory.
                <br />
                <br />
                🔳 For every successful exercise, you will gain 2 points!
                <br />
                <br />
                🔳 To view the code again, click on the 'What's The Code' button.
                <br />
                <br />
                🔳 Once your code has been verified by using the 'Check Code' button, it will
                automatically change to a 'Next Exercise' button.
                <br />
                <br />
                🔳 Use the 'Skip' button to skip any exercise.
                <br />
                <br />
                🔳 You will not be able to paste code on this editor! 👀
                <br />
                <br />
                🔳 Your score will refresh like a new day every 24 hours!
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
