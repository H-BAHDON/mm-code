// Setup Ace
let codeEditor = ace.edit("editor");

let exercise1 = '<h1>Hello World</h1>';
let check = document.querySelector(".nextExercise");

let currentExercise = ChooseRandomExercise(exercisesHtml);
let userCode = codeEditor.getValue();

var e = '<ul>\n <li>Coffee</li> \n <li>Tea</li> \n <li>Milk</li>\n</ul>'

let editorLib = {
  init() {
    // Configure Ace
    // Theme
    codeEditor.setTheme("ace/theme/chaos");
    // Set language
    codeEditor.session.setMode("ace/mode/html");
    // Set Options
    codeEditor.setOptions({
      highlightSelectedWord: false,
      fontSize: '12pt',
      newLineMode: "auto",
      highlightGutterLine: true,
      selectionStyle: 'line',
    });
    // Set Default Code
    codeEditor.setValue(currentExercise);
    // codeEditor.firstLineNumber(defaultCode3);

  }
}

function ChooseRandomExercise(arr) {
  RandomExercise = Math.floor(Math.random() * exercisesHtml.length);
  var item = arr[RandomExercise];
  return item
}

//this function chooses a random exercise from the array we created
function nextExercise() {
  if (currentExercise <= 3 ) {
    alert("hello");
  }else(
    alert("nopt")
  )
  document.querySelector(".skipMe").addEventListener("click", function() {
    codeEditor.setValue(ChooseRandomExercise(exercisesHtml));
  })
}

// no cheating  function
function noCheating() {
  codeEditor.onCopy = function(){}
  codeEditor.onCut = function(){}
  codeEditor.onPaste = function(){}
  codeEditor.getCopyText = function(){}
}

/// this is where the code runs
editorLib.init();
// noCheating();
nextExercise();