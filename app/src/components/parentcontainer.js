import ActionBox from "./actionbox";
import InputContainer from "./inputcontainer";

const ParentContainer = () => {
  const selectedItem = {
    ID: 1,
    Text: "Meals",
    Description: "Provided meal vouchers for rescheduled flight.",
  };

  return (
    <div>
      <div>
        <InputContainer />
      </div>
      <div>
        <ActionBox Item={selectedItem} />
      </div>
    </div>
  );
};
export default ParentContainer;
