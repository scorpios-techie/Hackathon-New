import ListSummary from "./listsummary";

const ActionBox = ({ Item }) => {
  return (
    <div>
      <div>
        <ListSummary Item={Item} />
      </div>
      <button>Demo Button</button>
    </div>
  );
};
export default ActionBox;
