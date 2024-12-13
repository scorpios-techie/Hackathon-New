import React from "react";

const Header = () => {
  const name = "Vincent Doe";
  const dept = "Operations";
  return (
    <div className="header">
      <h3>{name}</h3>
      <h5>{dept}</h5>
      <h3>Logged In</h3>
    </div>
  );
};

export default Header;
