import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <form>
        <input
          type='search'
          placeholder='search pokemon'
          onChange={searchChange}
        ></input>
        <input type='button' value='Search!' />
      </form>
    </div>
  );
};

export default SearchBox;
