import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    const METHODS = ['handleAdd', 'handleSubtract'];

    // Trick to bind each method to the Class's this
    METHODS.forEach(method => {
      this[method] = this[method].bind(this);
    });

    this.state = {
      count: 0
    };
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleSubtract() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleAdd}> + </button>
        <button onClick={this.handleSubtract}> - </button>
      </div>
    );
  }
}

export default Counter;
