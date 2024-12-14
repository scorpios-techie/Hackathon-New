import React from "react";

const SuggestionButton = ({ SuggestionText, style }) => {
  console.log("Button : " + SuggestionText);
  return (
    <div>
      <img src="./../resources/info.jfif" alt="Suggestion Icon" />
      <button style={style} className="suggestion_button">
        {SuggestionText}
      </button>
    </div>
  );
};

export default SuggestionButton;
