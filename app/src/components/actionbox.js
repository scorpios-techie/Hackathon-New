import ListSummary from "./listsummary";

const ActionBox = () => {
  const dummyItem = {
    ID: 1,
    Text: "Meal",
    Description: "Provided meal vouchers and rescheduled flight.",
  };

  return (
    <div>
      {/* <h2>Action Box</h2> */}
      <div>
        <ListSummary />
      </div>
      <button>Demo Button</button>
    </div>
  );
};
export default ActionBox;
