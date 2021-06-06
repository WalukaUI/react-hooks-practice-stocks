import React, { useState } from "react";

function SearchBar({ sortStocks, filterByCategory }) {
  const [state, setState] = useState("")
  function cahngevalue(e) {
    setState(e.target.value)
    sortStocks(e.target.value)
  }
  function filterbyType(x) {
    filterByCategory(x.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={state === "Alphabetically" ? true : false}
          onChange={cahngevalue}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={state === "Price" ? true : false}
          onChange={cahngevalue}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={filterbyType}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
