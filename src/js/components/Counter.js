import React, { Component } from "react";
import "../../css/frameworks/bootstrap.min.css";
import "../../css/frameworks/normalize.css";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="my-0">Hello World</h1>
        <button className="btn btn-warning">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
