const ListSummary = ({ Item }) => {
  const { Text, Description } = Item;
  console.log(Item);
  return (
    <div>
      <h2>{Text}</h2>
      <p>{Description}</p>
    </div>
  );
};

export default ListSummary;
