import React from "react";

function Table({ result }) {
  return (
    <ul className="list">
      {result &&
        result.map((el) => <li key={Math.floor(Math.random() * 500)}>{el}</li>)}
    </ul>
  );
}

export default Table;
