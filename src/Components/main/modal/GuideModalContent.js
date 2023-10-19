import React from 'react';

function GuideModalContent({ handleCloseGuide }) {
    console.log("Rendering Guide Modal");
    return (
        <div className="modals" onClick={handleCloseGuide}>
            <div className="modals-overlay"></div>
            <div className="modals-content">
                <h2>Your Guide 📜</h2>
                <p>
                            🔳 Select a language from the navbar to enhance your muscle memory.
                            <br />
                            <br />
                            🔳 For every successful exercise, you will gain 2 points!
                            <br />
                            <br />
                            🔳 To view the code again, click on the 'What's The Code' button.
                            <br />
                            <br />
                            🔳 Once your code has been verified by using the 'Check Code' button, it will
                            automatically change to a 'Next Exercise' button.
                            <br />
                            <br />
                            🔳 Use the 'Skip' button to skip any exercise.
                            <br />
                            <br />
                            🔳 You will not be able to paste code on this editor! 👀
                            <br />
                            <br />
                            🔳 Your score will refresh like a new day every 24 hours!
                        </p>
            </div>
        </div>
    );
}

export default GuideModalContent;

