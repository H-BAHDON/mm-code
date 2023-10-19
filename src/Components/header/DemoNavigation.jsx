import React, { useState } from "react";

function DemoNavigation({ handleJavaScriptClick }) {
  const [activeTab, setActiveTab] = useState("");

  return (
    <nav className="navbar">
      <p
        className="nav-item-html nav-link"
        style={{ opacity: 0.5, cursor: 'not-allowed' }}
      >
        html
      </p>
      <p
        className="nav-item-css nav-link"
        style={{ opacity: 0.5, cursor: 'not-allowed' }}
      >
        css
      </p>
      <p
        className={`nav-item-javascript nav-link ${
          activeTab === "javascript" ? "active" : ""
        }`}
        onClick={() => {
          setActiveTab("javascript");
          handleJavaScriptClick();
        }}
      >
        javascript
      </p>
      <p
        className="nav-item-react nav-link"
        style={{ opacity: 0.5, cursor: 'not-allowed' }}
      >
        React
      </p>
      <p
        className="nav-item-sql nav-link"
        style={{ opacity: 0.5, cursor: 'not-allowed' }}
      >
        SQL
      </p>
      <p
        className="nav-item-test nav-link"
        style={{ opacity: 0.5, cursor: 'not-allowed' }}
      >
        Test
      </p>
    </nav>
  );
}

export default DemoNavigation;
