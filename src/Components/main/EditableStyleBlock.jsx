import React, { useState } from "react";

const EditableStyleBlock = () => {
  const [cssContent, setCssContent] = useState(
    `/* Enter your CSS here... */\nbody {\n  background-color: lightgray;\n}`
  );

  const handleCssChange = (event) => {
    setCssContent(event.target.value);
  };

  return (
    <div>
      <h2>Editable Style Block</h2>
      <textarea
        value={cssContent}
        onChange={handleCssChange}
        style={{
          width: "100%",
          height: "200px",
          fontFamily: "monospace",
        }}
      />
      {/* Apply the CSS using a dynamically created <style> tag */}
      <style>{cssContent}</style>
      <div>
        <p>This is a paragraph that will be styled based on the CSS above.</p>
      </div>
    </div>
  );
};

export default EditableStyleBlock;
