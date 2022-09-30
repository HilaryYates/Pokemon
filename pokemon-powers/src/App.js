import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = { searchField: "", three: 3 };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value }, () => {
      // console.log(this.state.searchField);
    });
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
