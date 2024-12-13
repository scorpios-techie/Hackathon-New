import ActionBox from "./actionbox";
import List from "./list";

const ParentContainer = () => {
  return (
    <div className="content">
      <div>
        <List />
      </div>
      <div>
        <ActionBox />
      </div>
    </div>
  );
};
export default ParentContainer;
