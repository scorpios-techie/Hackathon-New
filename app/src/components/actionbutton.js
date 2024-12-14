const ActionButton = ({ Text, style }) => {
  return (
    <button style={style} className="action-button">
      {Text}
    </button>
  );
};

export default ActionButton;
