import React from "react";

const ComponentPreview = ({ title, code, children }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied!");
    });
  };

  return (
    // This class ensures the box stays inside your existing grid layout
    <div className="component-box">
      <h4>{title}</h4>
      <div className="preview-content">
        {children}
      </div>
      <button className="copy-btn" onClick={handleCopy}>
        Copy Code
      </button>
    </div>
  );
};

export default ComponentPreview;