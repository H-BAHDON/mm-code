import React from 'react';

function descriptionPanel() {

  return (
    <main>
      <section className="mainPanel">
        <div className="panel-Description">
          <h1>HTML Muscle Memory</h1>
          <p>The code below and the information box on the right hand side will always disappear when you're typing your code.
          This will help your visual memory along side the exercise improving your muscle
            memory! It's all for your benefit!</p>
          <button className="nextExercise btn btn-success" type="button">Next exercise</button>
        </div>
      </section>
    </main>
  )
}

export default descriptionPanel;