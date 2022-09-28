// import React from "react";
import React, { Component } from "react";
import App from "../App";

// const SearchBox = ({ searchField, searchChange, search }) => {
//   const searchPokemon = async (event) => {
//     event.preventDefault();
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + search);
//     const data = await response.json();
//     console.log(data);
//     const abilities = data.abilities.map((power) => power.ability.name);
//     const heldItems = data.held_items.map((item) => item.item.name);
//   };
//   return (
//     <div>
//       <form onSubmit={searchPokemon}>
//         <input
//           type='search'
//           placeholder='search pokemon'
//           onChange={searchChange}
//         ></input>
//         <input type='button' value='Search!' />
//       </form>
//     </div>
//   );
// };

// export default SearchBox;

class SearchBox extends Component {
  constructor() {
    super();
    this.state = { pokemonData: [] };
  }

  render() {
    const searchPokemon = async (event) => {
      event.preventDefault();
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
        //todo + search
      );
      const data = await response.json();
      console.log(data);
      this.setState({
        pokemonData: data,
      });
    };
    return (
      <div>
        <form onSubmit={searchPokemon}>
          <input
            type='search'
            placeholder='search pokemon'
            onChange={this.props.searchChange}
          ></input>
          <input type='button' value='Search!' />
        </form>
      </div>
    );
  }
}
export default SearchBox;

// import React, { Component } from "react";
// import "./App.css";
// import SearchBox from "./components/SearchBox";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { searchField: "" };
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <SearchBox
//           searchChange={this.onSearchChange}
//           search={this.state.searchField}
//         />
//       </div>
//     );
//   }
// }

// export default App;
