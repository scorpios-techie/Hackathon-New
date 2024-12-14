import React from "react";

const SuggestionButton = ({ SuggestionText }) => {
  console.log("Button : " + SuggestionText);
  return (
    <div>
      <img src="./../resources/info.jfif" alt="Suggestion Icon" />
      <button className="suggestion-button">{SuggestionText}</button>
    </div>
  );
};

export default SuggestionButton;
