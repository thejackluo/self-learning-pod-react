import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";

const CreatePodFormInput = (props) => {
  return (
    <form id="create-pod-form-input">
      <label>Pod Name</label>
      <input className="form-control my-2" type="text" placeholder="Pod Name" />
      <label>Pod Description</label>
      <input
        className="form-control my-2"
        type="text"
        placeholder="Pod Description"
      />
      <button className="btn btn-outline-success my-2">Submit</button>
    </form>
  );
};

class CreatePodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      createPodForm: true,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
      createPodForm: this.state.createPodForm,
    });
  }

  formatCount() {
    const { count } = this.state;
    return " " + count;
  }

  showForm = () => {
    this.setState({
      count: this.state.count,
      createPodForm: true,
    });
  };

  hideForm = () => {
    this.setState({
      count: this.state.count,
      createPodForm: false,
    });
  };

  renderForm = () => {
    if (this.state.createPodForm === true) {
      return <CreatePodFormInput />;
    }
  };

  render() {
    return (
      <div className="CreatePodForm">
        <h1>Hello Everyone! Please refer below to create a pod</h1>
        <h5>
          Number of Pods:
          <span>
            <strong>{this.formatCount()}</strong>
          </span>
        </h5>
        <p>Create, change your pod here</p>
        <button className="btn btn-outline-success" onClick={this.showForm}>
          Create new pod
        </button>
        <button className="btn btn-outline-warning" onClick={this.hideForm}>
          Hide Stuff
        </button>
        <button className="btn btn-outline-danger">Clear All Pods</button>
        {this.renderForm()}
      </div>
    );
  }
}

export default CreatePodForm;
