import React, { Component } from "react";
import "../../css/frameworks/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.charavters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <header className="App-header">
            <h1>Hello World</h1>
            <button className="btn btn-primary">Click here</button>
          </header>
          <Form handleSubmit={this.handleSubmit} />
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      </div>
    );
  }
}

export default App;
