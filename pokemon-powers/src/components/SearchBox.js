// import React from "react";
import React, { useState, useEffect } from "react";
import App from "../App";

const SearchBox = ({ searchChange, search }) => {
  const [fetchOk, setFetchOk] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [heldItems, setheldItems] = useState([]);
  const [moves, setMoves] = useState([]);

  const getPokemon = async (event) => {
    event.preventDefault();

    const fetchStats = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + search
    );

    const fetchOk = fetchStats.ok;

    setFetchOk(fetchOk);

    const statsData = await fetchStats.json();

    const moves = statsData.moves.map((move) => move.move.name);

    setMoves(moves);

    const abilities = statsData.abilities.map(
      (ability) => ability.ability.name
    );

    setAbilities(abilities);

    const heldItems = statsData.held_items.map((item) => item.item.name);

    setheldItems(heldItems);
  };
  return (
    <div>
      <h1>Pokemon</h1>
      <form onSubmit={getPokemon}>
        <input
          type='search'
          placeholder='search pokemon'
          onChange={searchChange}
        ></input>
        <input type='button' value='Search!' />
      </form>
      {fetchOk ? (
        <div>
          <h3>Stats</h3>
          <p>moves</p>
          {moves.map((move) => (
            <ul>
              <li>
                <p>{move}</p>
              </li>
            </ul>
          ))}
          <p>abilities</p>
          {abilities.map((ability) => (
            <ul>
              <li>
                <p>{ability}</p>
              </li>
            </ul>
          ))}
          <p>held items</p>

          {heldItems.map((item) => (
            <ul>
              <li>
                <p>{item}</p>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <div>Sorry, you haven't caught that</div>
      )}
    </div>
  );
};

export default SearchBox;
