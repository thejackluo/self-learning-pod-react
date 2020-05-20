import React, { Component } from "react";
import "../../css/frameworks/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      {
        name: "Jack",
        job: "Entrepreneur",
      },
    ],
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
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
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
