import React from 'react';

function CodeModalContent({ initialCode, currentExerciseExplanation, handleCloseModal }) {
    return (
        <>
           <div className="modals">
                    <div className="modals-overlay" onClick={handleCloseModal}></div>
                    <div className="modals-content">
                        <div className="modals-header">
                            <h3>Code</h3>
                        </div>
                        <div className="modals-body">
                            <pre>{initialCode}</pre>
                            <div className="modals-header">
                                <h3>Explanation</h3>
                            </div>
                            <p>{currentExerciseExplanation}</p>
                        </div>
                        <div className="modals-footer">
                            <button
                                className="btn btn-secondary"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default CodeModalContent;
