import React from "react";

function DescriptionPanel({ onNextExercise }) {
  const handleNextExercise = () => {
    onNextExercise(); // Call the parent component's callback function
  };

  return (
    <main>
      <section className="mainPanel">
        <div className="panel-Description">
          <h1>Syntax Muscle Memory</h1>
          <p>
            The code below will disappear as soon as you start typing! If you
            wish to see the code again, click the 'Reset' button below the text
            editor. If you accurately write out the code without any errors, you
            can click 'Next Exercise'. If, however, the code is too difficult
            for you to practice with, you can 'Skip' to the next!
          </p>
          {/* The wordings could be more playful, but understandable. Especially for the home page. 
            The more creative and attractive the pages look, the more interesting the project will be and the 
            more time people would spend on the website. E.g., when they hover over the title, it pops up saying 
            'this title was made using HTML and CSS'. */}
          <button
            className="nextExercise btn btn-success"
            type="button"
            onClick={handleNextExercise}
          >
            Next exercise
          </button>
        </div>
      </section>
    </main>
  );
}

export default DescriptionPanel;
