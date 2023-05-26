import React, { useState } from "react";

function DescriptionPanel({ onNextExercise, onSkipExercise, nextButton }) {
  const [showModal, setShowModal] = useState(false);

  const handleNextExercise = () => {
    onNextExercise();
  };

  const handleSkipExercise = () => {
    onSkipExercise();
  };

  const handleHelpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <section className="mainPanel">
        <div className="panel-Description">
          <h1>Syntax Muscle Memory</h1>
          <p>
            At the top of the page, you can choose which programming languages
            you want to practice: HTML, CSS, or JavaScript. Simply click on the
            respective language button, and the exercises will be filtered to
            display only the code snippets from that language.
            <br />
            <br /> To begin the exercise, the placeholder code below will
            disappear as soon as you start typing in the editor. If you need to
            reference the exercise code again, simply click the 'Code' button
            located below the editor to display it.
            Each exercise has a different difficulty level and
            corresponding score. Once you have written your code, click the
            'Check Code' button to verify its accuracy. If your code is correct,
            you will be awarded the score associated with that exercise, and you
            can proceed to the next one. If you find an exercise too
            challenging, you can click the 'Skip' button to move to the next
            exercise without earning any score. Please note that clicking the
            'Reset' button will erase any code you have written in the editor,
            so use it carefully.
          </p>
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
            <button
              className="help btn btn-success"
              type="button"
              onClick={handleHelpClick}
            >
              ?
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <h2>Rules</h2>
            <p>
              - You are not allowed to paste code on this editor.
              <br />
              - HTML code has a score range of 1-3.
              <br />
              - CSS code has a score range of 2-3.
              <br />
              - JavaScript code has a score range of 3-5.
              <br />- If you refresh the website, all scores will be lost!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default DescriptionPanel;
