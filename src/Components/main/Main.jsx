import React, { useState, useEffect } from "react";
import DescriptionPanel from "../buttons/descriptionPanel";
import CodeEditor from "./CodeEditor";
import Buttons from "../buttons/buttons";
import Data from "../../test.json";

function Main() {
  const [userCode, setUserCode] = useState("");
  const [initialCode, setInitialCode] = useState("");

  useEffect(() => {
    // Get a random code from the test.json file
    const randomIndex = Math.floor(Math.random() * Data.length);
    const randomCode = Data[randomIndex].code;
    setInitialCode(randomCode);
  }, []);

  const handleCheckCode = () => {
    // Define the expected code
    const expectedCode = initialCode;

    // Remove spaces, convert to lowercase, and replace quotes for comparison
    const formattedUserCode = userCode
      .replace(/\s/g, "")
      .toLowerCase()
      .replace(/['"]/g, "");
    const formattedExpectedCode = expectedCode
      .replace(/\s/g, "")
      .toLowerCase()
      .replace(/['"]/g, "");

    // Check if the formatted user code matches the formatted expected code
    if (formattedUserCode === formattedExpectedCode) {
      console.log("Bravo! You did it.");
    } else {
      console.log("Try again.");
    }
  };

  const handleResetCode = () => {
    setUserCode("");
  };

  return (
    <main>
      <div className="editor-container">
        <DescriptionPanel />
        <CodeEditor
          userCode={userCode}
          setUserCode={setUserCode}
          initialCode={initialCode}
        />
        <Buttons
          handleCheckCode={handleCheckCode}
          handleResetCode={handleResetCode}
        />
      </div>
    </main>
  );
}

export default Main;
