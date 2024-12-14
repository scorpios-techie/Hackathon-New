import ActionBox from "./actionbox";
import InputContainer from "./inputcontainer";

const ParentContainer = () => {
  const selectedItem = {
    ID: 1,
    Text: "Meals",
    Description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor finibus curabitur maximus condimentum nam. Nisl felis metus habitant felis dictum hac per ut quam. Litora at a volutpat faucibus sodales a. Malesuada amet aliquet inceptos ac fames potenti netus. Nulla fringilla sociosqu euismod nisl ante erat metus commodo imperdiet. Magnis viverra lacinia ornare lacinia velit sem pretium. Magna lobortis amet fames pharetra aliquet felis gravida eros.",
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
