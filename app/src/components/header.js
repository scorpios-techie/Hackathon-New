import React from "react";

const Header = () => {
  const name = "Name";
  const dept = "Dept";
  return (
    <div className="header">
      <h3>{name}</h3>
      <h3>{dept}</h3>
      <h3>Logged In</h3>
    </div>
  );
};

export default Header;
