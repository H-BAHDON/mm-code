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
          {/* <h1>Programming Muscle Memory</h1> */}
          {/* <p>
            Simply click on the respective language button above, and the exercises will be filtered to
            display only the code snippets from that language.
            <br />
            <br /> Once you start, the placeholder code inside the editor will disappear. If you need to refer back to the 
            exercise code, simply click the 'What's The Code' button below the editor. 
            Each exercise has a different difficulty level and corresponding score. After writing your code, 
            click the 'Check Code' button to verify its accuracy. If your code is correct, you will be awarded the score 
            associated with that exercise. Then, you can proceed to the next exercise.
            If you find an exercise too challenging, you can click the 'Skip' button to move to the next exercise without 
            earning any score. Please note that clicking the 'Reset' button will erase any code you have written in the editor, 
            so use it carefully.
          </p> */}
          <div className="header-Buttons">
          <button
              className="help btn btn-success"
              type="button"
              onClick={handleHelpClick}
            >
               Guide
            </button>
            <button
              className="nextExercise btn btn-success"
              type="button"
              onClick={handleSkipExercise}
            >
              Skip
            </button>
            <button
              className="nextExercise btn btn-success"
              type="button"
              onClick={handleNextExercise}
              disabled={nextButton}
            >
              Next Exercise
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <h2>Guide</h2>
            <p>
              - Each exercise will give you a different score depending on it's difficulty.
              <br />
              <br />
              - This score will range from 1-5 per exercise.
              <br />
              <br />
              - The 'Next Exercise' button will be enabled once your code has been verified using
              the 'Check Code' button.
              <br />
              <br />
              - Use the button 'What's The Code' to view the code again. 
              <br />
              <br />
              - Use the 'Skip' button to skip an exercise.
              <br />
              <br />
              - You will not be able to paste code on this editor ;) 
              <br />
              <br />
              - If you refresh the website, all scores will be lost!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default DescriptionPanel;
