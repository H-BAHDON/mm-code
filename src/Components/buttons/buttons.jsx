import React from "react";

function Buttons({ handleCheckCode }) {
  return (
    <div className="editor-Buttons">
      <button className="doneButton btn btn-success" type="button">
        Reset
      </button>
      <button
        className="checkButton btn btn-success"
        type="button"
        onClick={handleCheckCode}
      >
        Check code
      </button>
    </div>
  );
}

export default Buttons;
