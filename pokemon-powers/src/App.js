import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = { searchField: "" };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <div>
        <SearchBox
          searchChange={this.onSearchChange}
          search={this.state.searchField}
        />
      </div>
    );
  }
}

export default App;
