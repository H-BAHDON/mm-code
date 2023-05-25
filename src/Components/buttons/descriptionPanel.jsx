import React from "react";

function DescriptionPanel({ onNextExercise, onSkipExercise, nextButton }) {
  const handleNextExercise = () => {
    onNextExercise(); // Call the parent component's callback function
  };
  const handleSkipExercise = () => {
    onSkipExercise(); // Call the parent component's callback function
  };
  return (
    <main>
      <section className="mainPanel">
        <div className="panel-Description">
          <h1>Syntax Muscle Memory</h1>
          <p>
            To begin the exercise, the placeholder code below will disappear as
            soon as you start typing in the editor. If you need to reference the
            exercise code again, simply click the 'Code' button located below
            the editor to display it as a placeholder. Each exercise has a
            different difficulty level and corresponding score. Once you have
            written your code, click the 'Check Code' button to verify its
            accuracy. If your code is correct, you will be awarded the score
            associated with that exercise, and you can proceed to the next one.
            If you find an exercise too challenging, you can click the 'Skip'
            button to move to the next exercise without earning any score.
            Please note that clicking the 'Reset' button will erase any code you
            have written in the editor, so use it carefully.
          </p>
          {/* <p>
            The code below will disappear as soon as you start typing! If you
            wish to see the code again, click the 'Reset' button below the text
            editor. If you accurately write out the code without any errors, you
            can click 'Next Exercise'. If, however, the code is too difficult
            for you to practice with, you can 'Skip' to the next!
          </p> */}
          {/* The wordings could be more playful, but understandable. Especially for the home page. 
            The more creative and attractive the pages look, the more interesting the project will be and the 
            more time people would spend on the website. E.g., when they hover over the title, it pops up saying 
            'this title was made using HTML and CSS'. */}
          <div className="header-Buttons">
            <button
              className="nextExercise btn btn-success"
              type="button"
              onClick={handleNextExercise}
              disabled={nextButton}
            >
              Next exercise
            </button>
            <button
              className="nextExercise btn btn-success"
              type="button"
              onClick={handleSkipExercise}
            >
              Skip
            </button>
            <button className="help btn btn-success" type="button">
              ?
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DescriptionPanel;
