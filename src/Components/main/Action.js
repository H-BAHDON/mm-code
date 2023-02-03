import React from 'react'


function noCheating() {
  Main.onCopy = function () { };
  Main.onCut = function () { };
  Main.onPaste = function () { };
  Main.getCopyText = function () { };
}



export default noCheating;