import ActionBox from "./actionbox";
import List from "./list";

const ParentContainer = () => {
  return (
    <div className="content">
      <div className="list-container">
        <List />
      </div>
      <div className="action-box-container">
        <ActionBox />
      </div>
    </div>
  );
};
export default ParentContainer;
