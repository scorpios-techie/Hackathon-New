import ActionButton from "./actionbutton";
import SuggestionButton from "./suggestionbutton";

const SuggestionContainer = ({ Suggestions }) => {
  console.log("SuggestionsContainer");

  let blueStyle = { backgroundColor: "lightblue" };
  return (
    <div>
      {/* Conditionally render buttons based on Suggestions array */}
      {Suggestions && Suggestions.length > 0 ? (
        Suggestions.map((text, index) => (
          <ActionButton style={blueStyle} key={index} Text={text} />
        ))
      ) : (
        <p>No suggestions available</p>
      )}
    </div>
  );
};

export default SuggestionContainer;
