import React, { useState } from "react";

function Navigation({
  handleHTMLClick,
  handleJavaScriptClick,
  handleCSSClick,
  handleReactClick,
  handleSqlClick,
  handleTestClick,
}) {
  const [activeTab, setActiveTab] = useState("html");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <p
        className={`nav-item-html nav-link ${
          activeTab === "html" ? "active" : ""
        }`}
        onClick={() => {
          handleTabClick("html");
          handleHTMLClick();
        }}
      >
        html
      </p>
      <p
        className={`nav-item-css nav-link ${
          activeTab === "css" ? "active" : ""
        }`}
        onClick={() => {
          handleTabClick("css");
          handleCSSClick();
        }}
      >
        css
      </p>
      <p
        className={`nav-item-javascript nav-link ${
          activeTab === "javascript" ? "active" : ""
        }`}
        onClick={() => {
          handleTabClick("javascript");
          handleJavaScriptClick();
        }}
      >
        javascript
      </p>
      <p
        className={`nav-item-react nav-link ${
          activeTab === "react" ? "active" : ""
        }`}
        onClick={() => {
          handleTabClick("react");
          handleReactClick();
        }}
      >
        React
      </p>
      <p
        className={`nav-item-sql nav-link ${
          activeTab === "sql" ? "active" : ""
        }`}
        onClick={() => {
          handleTabClick("sql");
          handleSqlClick();
        }}
      >
        SQL
      </p>
      <p
        className={`nav-item-test nav-link ${
          activeTab === "test" ? "active" : ""
        }`}
        onClick={() => {
          handleTabClick("test");
          handleTestClick();
        }}
      >
        Test
      </p>
    </nav>
  );
}

export default Navigation;
