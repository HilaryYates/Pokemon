import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        type='search'
        placeholder='search pokemon'
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
