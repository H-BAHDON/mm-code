import React from "react";

function Buttons({
  handleCheckCode,
  handleResetCode,
  initialCode,
  checkButton,
  showModal,
  onShowModal,
  onCloseModal,
}) {
  const handleReset = () => {
    handleResetCode();
  };

  const handleShowModal = () => {
    onShowModal();
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <div className="editor-Buttons">
      <button
        className="checkButton btn btn-success"
        type="button"
        onClick={handleShowModal}
      >
        What's The Code
      </button>
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
        disabled={checkButton}
      >
        Check Code
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Code</h3>
            </div>
            <div className="modal-body">
              <pre>{initialCode}</pre>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buttons;
