import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CodeEditor from "../codeEditor/CodeEditor";
import Confetti from "react-confetti";
import './main.css'
import GuideModalContent from "./modal/GuideModalContent";
import CodeModalContent from "./modal/CodeModalContent";
import ThemeSelector from "../themeSelector/themeSelector";
import Header from "../header/Header";
// ---------------------------
// import exercises
import htmlData from "../../Exercise/htmlExercise.json";
import cssData from "../../Exercise/cssExercise.json";
import reactData from "../../Exercise/reactExercise.json";
import javascriptData from "../../Exercise/javascriptExercise.json";
import SQLData from "../../Exercise/SqlExercise.json";
import testData from "../../Exercise/testExercise.json";
import Button from "@mui/material/Button";

// ---------------------------

function Main({ exerciseLanguage, setExerciseLanguage }) {
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
  const [currentExerciseExplanation, setCurrentExerciseExplanation] =
    useState("");

  const [showModal, setShowModal] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiShown, setConfettiShown] = useState(false);

  const [theme, setTheme] = useState("monokai");
  const [fontSize, setFontSize] = useState(17);

  const handleKeyPress = (event) => {
    if (event.altKey && event.key === "Shift") {
      setShowModal((prevShowModal) => !prevShowModal);
    }
  };

  useEffect(() => {
    generateRandomCode();
    setResultTextVisible(false);
    setNextButton(false);
    setCheckButton(false);

    let scores = localStorage.getItem("score");
    if (scores) {
      setScores(parseInt(scores));
    }

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
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
    `Well done! ${currentExerciseScore} more points added to your score.`,
    `Impressive performance! You've earned ${currentExerciseScore} points.`,
    `Keep up the excellent work! Your score has increased by ${currentExerciseScore} points.`,
    `Outstanding effort! ${currentExerciseScore} more points for your dedication.`,
    `You're on a roll! ${currentExerciseScore} points earned – keep pushing yourself!`,
    `Exceptional work! Your score has climbed by ${currentExerciseScore} points.`,
    `Remarkable performance! ${currentExerciseScore} more points in the bag.`,
    `Fantastic progress! You've earned ${currentExerciseScore} points toward mastery.`,
    `You're crushing it! ${currentExerciseScore} more points for your hard work.`,
    `Kudos! Your dedication is shining through with ${currentExerciseScore} points earned.`,
  ];

  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  };
  //
  const generateRandomCode = () => {
    let filteredData;
    let data;

    if (
      exerciseLanguage === "javascript" ||
      exerciseLanguage === "react" ||
      exerciseLanguage === "test"
    ) {
      if (exerciseLanguage === "test") {
        data = testData;
      } else {
        data = exerciseLanguage === "javascript" ? javascriptData : reactData;
      }
      filteredData = data.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
    } else if (exerciseLanguage === "html") {
      filteredData = htmlData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
    } else if (exerciseLanguage === "css") {
      filteredData = cssData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
    } else if (exerciseLanguage === "sql") {
      filteredData = SQLData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
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
    if (!randomExercise || typeof randomExercise.code !== "string") {
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
      const filteredData = reactData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
      expectedCode = filteredData[currentExerciseIndex].code;
    } else if (exerciseLanguage === "html") {
      const filteredData = htmlData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
      expectedCode = filteredData[currentExerciseIndex].code;
    } else if (exerciseLanguage === "css") {
      const filteredData = cssData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
      expectedCode = filteredData[currentExerciseIndex].code;
    } else if (exerciseLanguage === "sql") {
      const filteredData = SQLData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
      expectedCode = filteredData[currentExerciseIndex].code;
    } else if (exerciseLanguage === "test") {
      const filteredData = testData.filter(
        (exercise) => exercise.lang === exerciseLanguage
      );
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
    setCheckButton(false);
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
    console.log("Closing Guide Modal"); // Check if this log is displayed in the console
    setShowGuide(false);
  };
  const handleConfettiComplete = () => {
    setShowConfetti(false); // Hide confetti after it completes
  };

  return (
    <main style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        style={{ height: "100%" }}
      >
        {/* Left Bar */}
        <Grid
          item
          xs={12}
          md={1.5}
          style={{
            height: "100%",
            backgroundColor: "white",
            color: "black",
            padding: "20px",
          }}
        >
          <div style={{ height: "100%" }}>
            <div style={{ marginBottom: "20px" }}>
              <ThemeSelector setTheme={setTheme} setFontSize={setFontSize} />
            </div>
          </div>
        </Grid>

        {/* Right Bar */}
        <Grid
          item
          xs={12}
          md={10.5}
          style={{
            height: "100%",
            backgroundColor: "white",
            color: "black",
            padding: "20px",
          }}
        >
          {/* Title Bar */}
          <div
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: "16px", marginBottom: "5px", flex: "1" }}>
              Indexx - {exerciseLanguage}
            </div>
            <div
              style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
            >
              <Button
                variant="outlined"
                size="small"
                onClick={handleShowGuide}
                style={{ color: "black" }}
              >
                Guide Me!
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={handleShowModal}
                style={{ color: "black" }}
              >
                What's The Code
              </Button>
              <Button
                variant={nextButton ? "contained" : "outlined"}
                size="small"
                onClick={nextButton ? handleNextExercise : handleCheckCode}
                style={{ color: "black" }}
              >
                {nextButton ? "Next Exercise" : "Check Code"}
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={handleSkipExercise}
                style={{ color: "black" }}
                disabled={checkButton}
              >
                Skip
              </Button>
            </div>
          </div>

          {/* Code Editor */}
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
            theme={theme}
            fontSize={fontSize}
          />

          {/* Scores Section */}
          <div
            style={{
              bottom: "0",
              left: "0",
              right: "0",
              backgroundColor: "#ffffff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: '50px', 
            }}
          >
            <p
              style={{
                color: "#161616",
                fontSize: "18px",
                marginTop: "10px",
                marginBottom: "20px",
                transition: "opacity 0.5s",
                opacity: resultTextVisible ? 1 : 0,
               
              }}
            >
              {resultText}
            </p>
            <p style={{ color: "#161616", fontSize: "18px", marginBottom: "20px" }}>
              Your Score: {score}
            </p>
          </div>
        </Grid>
      </Grid>

      {/* Confetti Animation */}
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

      {/* Code Modal */}
      {showModal && (
        <CodeModalContent
          initialCode={initialCode}
          currentExerciseExplanation={currentExerciseExplanation}
          handleCloseModal={handleCloseModal}
        />
      )}

      {/* Guide Modal */}
      {showGuide && <GuideModalContent handleCloseGuide={handleCloseGuide} />}
    </main>
  );
}

export default Main;
