import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div className="Counter">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({});
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.handleDecrement({});
          }}
          className="btn btn-danger btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge mx-4";
    if (this.state.count === 0) {
      classes += " badge-warning";
    } else {
      classes += " badge-primary";
    }
    return classes;
  }
}

export default Counter;
