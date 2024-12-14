import Filter from "./filter";
import List from "./list";

const InputContainer = () => {
  return (
    <div className="stacked-container">
      <div style={{ flex: 1 }}>
        <List />
      </div>
      <div style={{ flex: 1 }}>
        <Filter />
      </div>
    </div>
  );
};

export default InputContainer;
