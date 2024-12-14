import React from "react";
import { items } from "../mocks/data";

function List() {
  const ShowSummary = (item) => {
    return () => {
      //alert(`Summary for item: ${item.Description}`);
    };
  };

  return (
    <div className="left-list">
      <h2>Category</h2>
      <ul>
        {items.map((item) => (
          <li onClick={ShowSummary(item)} key={item.ID}>
            {item.Text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
