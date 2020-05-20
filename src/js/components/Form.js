import React, { Component } from "react";
import "../../css/frameworks/bootstrap.min.css";
import "../../css/frameworks/normalize.css";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form className="form">
        <h2>Add Item</h2>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          className="form-control"
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input
          class="btn btn-primary"
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }
}

export default Form;
