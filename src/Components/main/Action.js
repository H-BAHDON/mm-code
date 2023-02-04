import './Ace'
class Action {
  constructor() {
    this.noCheating = () => {
      AceEditor.onCopy = function () { };
      AceEditor.onCut = function () { };
      AceEditor.onPaste = function () { };
      AceEditor.getCopyText = function () { };
    };
  }
}

export default Action;