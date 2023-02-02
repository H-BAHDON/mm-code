
class Action {
  constructor() {
    this.noCheating = () => {
      codeEditor.onCopy = function () { };
      codeEditor.onCut = function () { };
      codeEditor.onPaste = function () { };
      codeEditor.getCopyText = function () { };
    };
    this.ChooseRandomExercise = (arr) => {
      RandomExercise = Math.floor(Math.random() * exercisesHtml.length);
      var item = arr[RandomExercise];
      return item;
    };

    // this.nextExercise = () => {
    //   if (currentExercise <= 3) {
    //     alert("hello");
    //   } else
    //     (
    //       alert("nopt")
    //     );
    //   document.querySelector(".skipMe").addEventListener("click", function () {
    //     codeEditor.setValue(ChooseRandomExercise(exercisesHtml));
    //   });
    // };

  }
}

export default Action;