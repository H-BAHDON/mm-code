import React from "react";

function Buttons({ handleCheckCode, handleResetCode }) {
  const handleReset = () => {
    handleResetCode();
  };

  return (
    <div className="editor-Buttons">
      <button
        className="doneButton btn btn-success"
        type="button"
        onClick={handleReset}
      >
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
