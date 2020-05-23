import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import Table from "./Table";
import Form from "./Form";
import Counter from "./Counter";
import CreatePodForm from "./CreatePodForm";

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
    /*const { characters } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <h1>Hello World</h1>
          <Form handleSubmit={this.handleSubmit} />
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      </div>
    ); */
    return (
      <div className="App">
        <div className="container-fluid">
          <Form handleSubmit={this.handleSubmit} />
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
          <CreatePodForm />
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
