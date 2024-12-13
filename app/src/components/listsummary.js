const ListSummary = (item) => {
  const { Text, Description } = item;
  return (
    <div>
      <h2>{Text}</h2>
      <p>{Description}</p>
    </div>
  );
};

export default ListSummary;
