import React from "react";

const SearchBox = ({ searchField, searchChange, search }) => {
  const searchPokemon = async (event) => {
    event.preventDefault();
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + search);
    const data = await response.json();
    console.log(data);
    console.log(search);
  };
  return (
    <div>
      <form onSubmit={searchPokemon}>
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
