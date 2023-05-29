// import React from "react";

// function DescriptionPanel({
//   onNextExercise,
//   onSkipExercise,
//   nextButton,
//   showGuide,
//   onShowGuide,
//   onCloseGuide,
// }) {


//   const handleNextExercise = () => {
//     onNextExercise();
//   };

//   const handleSkipExercise = () => {
//     onSkipExercise();
//   };

//   const handleHelpClick = () => {
//     onShowGuide()
//   };

//   const handleCloseModal = () => {
//     onCloseGuide()
//   };

//   return (
//     <main>
//       <section className="mainPanel">
//         <div className="panel-Description">
//           {/* <h1>Programming Muscle Memory</h1> */}
//           {/* <p>
//             Simply click on the respective language button above, and the exercises will be filtered to
//             display only the code snippets from that language.
//             <br />
//             <br /> Once you start, the placeholder code inside the editor will disappear. If you need to refer back to the 
//             exercise code, simply click the 'What's The Code' button below the editor. 
//             Each exercise has a different difficulty level and corresponding score. After writing your code, 
//             click the 'Check Code' button to verify its accuracy. If your code is correct, you will be awarded the score 
//             associated with that exercise. Then, you can proceed to the next exercise.
//             If you find an exercise too challenging, you can click the 'Skip' button to move to the next exercise without 
//             earning any score. Please note that clicking the 'Reset' button will erase any code you have written in the editor, 
//             so use it carefully.
//           </p> */}
//           <div className="header-Buttons">
//             <button
//               className="help btn btn-success"
//               type="button"
//               onClick={handleHelpClick}
//             >
//               Guide
//             </button>
//             <button
//               className="nextExercise btn btn-success"
//               type="button"
//               onClick={handleSkipExercise}
//             >
//               Skip
//             </button>
//             <button
//               className="nextExercise btn btn-success"
//               type="button"
//               onClick={handleNextExercise}
//               disabled={nextButton}
//             >
//               Next Exercise
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default DescriptionPanel;
