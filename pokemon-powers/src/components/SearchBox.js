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

// class SearchBox extends Component {
//   constructor() {
//     super();
//     this.state = { pokemonData: [] };
//   }

// render() {
// console.log(this.props.search);
// const searchPokemon = async (event) => {
//   event.preventDefault();
//   const response = await fetch(
//     "https://pokeapi.co/api/v2/pokemon/" + this.props.search
//   );
//   const data = await response.json();
//   console.log(data);

// console.log(pokemonData);

// this.componentDidUpdate()

// this.setState({ pokemonData: data }, () => {
// console.log(pokemonData);
// const pokemon = this.state.data.name;

// this.setState({ pokemonData: abilities }, () => {
//   const abilities = this.state.pokemonData.abilities.map(
//     (power) => power.ability.name
//   );
// });
// const abilities = this.state.pokemonData.abilities.map(
//   (power) => power.ability.name
// );

//   const heldItems = data.held_items.map((item) => item.item.name);
//   const moves = data.moves.map((move) => move.move.name);
// });
// console.log(pokemonData);
//     };
//     return (
//       <div>
//         <h1>Pokemon</h1>
//         <form onSubmit={searchPokemon}>
//           <input
//             type='search'
//             placeholder='search pokemon'
//             onChange={this.props.searchChange}
//           ></input>
//           <input type='button' value='Search!' />
//         </form>
//         <h2>{this.state.pokemonData.name}</h2>
//         <h3>Stats</h3>
//         <p>abilities</p>
//         <p>held items</p>
//         <p>moves</p>
//       </div>
//     );
//   }
// }
// export default SearchBox;
