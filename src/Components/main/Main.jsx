import React from 'react';



function Main() {

    
    return (
        <main>
        <section class="mainPanel">
         
          <div class="panel-Description">
            <h1>HTML Structure</h1>
            <p>The code below and the information box on the right hand side will always disappear when you're typing your code.
            This will help your visual memory along side the exercise improving your muscle
              memory! It's all for your benefit!</p>
    
            <button class="nextExercise btn btn-primary" type="button">Next exercise</button>
          </div>
          
          <div class="editor-container">
            <div id="editor"></div>
          </div>
          <div class="button">
            <button class="doneButton btn btn-success" type="button">Begin</button>
            <button class="checkButton btn btn-success" type="button" hidden="hidden">Check code</button>
          </div>
        </section>
      </main>
    )
}


export default Main;