export const getRandomSentence = (currentExerciseScore) => {
  const sentences = [
    `Good stuff! Improving your muscle memory could be one of the most important things in learning. You have earned ${currentExerciseScore} points!`,
    `Outstanding performance! You have gained ${currentExerciseScore} points!`,
    `Do you feel like you're improving!? Keep going and you definitely will be! ${currentExerciseScore} points achieved!`,
    `Admirable job! You have added ${currentExerciseScore} more points to your score. Keep going!`,
  ];

  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
};


// mainHelper.js
export const generateRandomCode = (
  exerciseLanguage,
  currentExerciseIndex,
  setInitialCode,
  setCurrentExerciseScore,
  setCurrentExerciseIndex,
  setCurrentExerciseExplanation,
  reactData,
  javascriptData,
  testData,
  htmlData,
  cssData,
  SQLData
) => {
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


// mainHelper.js
export const handleCheckCode = (
  exerciseLanguage,
  initialCode,
  reactData,
  htmlData,
  cssData,
  SQLData,
  testData,
  currentExerciseIndex,
  userCode,
  setUserCode,
  setScores,
  setCurrentExerciseScore,
  setResultText,
  setResultTextVisible,
  setResultTextClass,
  setNextButton,
  setCheckButton,
  setShowConfetti,
  setConfettiShown,
  score,
  currentExerciseScore,
  confettiShown,
  getRandomSentence
) => {
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