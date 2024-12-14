import ActionButton from "./actionbutton";
import SuggestionButton from "./suggestionbutton";

const SuggestionContainer = ({ Suggestions }) => {
  console.log("SuggestionsContainer");

  return (
    <div>
      {/* Conditionally render buttons based on Suggestions array */}
      {Suggestions && Suggestions.length > 0 ? (
        Suggestions.map((text, index) => (
          <SuggestionButton key={index} SuggestionText={text} />
        ))
      ) : (
        <p>No suggestions available</p>
      )}
    </div>
  );
};

export default SuggestionContainer;
