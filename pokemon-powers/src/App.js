import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = { searchField: "" };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon").then((response) =>
      response.json()
    );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <div>
        <SearchBox searchChange={this.onSearchChange} />
      </div>
    );
  }
}

export default App;
