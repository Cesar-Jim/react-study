import React, { Component } from 'react';
import PubSub from 'pubsub-js';

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
};

class GrandGrandChild extends Component {
  state = {
    message: '*******'
  };

  componentDidMount() {
    PubSub.subscribe('another event', (e, data) => {
      this.setState({
        message: data.title
      });
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe('another event');
  }

  handleClick = () => {
    PubSub.publish('greet', 'Hello from inside the GRAND GRAND child!');
  };

  render() {
    return (
      <div style={boxStyles}>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>GRAND CHILD</button>
      </div>
    );
  }
}

class GrandChild extends Component {
  componentDidMount() {
    PubSub.subscribe('another event', (e, data) => {});
  }

  render() {
    return (
      <div style={boxStyles}>
        <GrandGrandChild />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <GrandChild />
      </div>
    );
  }
}

class App extends Component {
  componentDidMount() {
    PubSub.subscribe('greet', (e, data) => {});
  }

  handleClick = () => {
    PubSub.publish('another event', { title: 'Hello from <App />' });
  };

  render() {
    return (
      <div style={boxStyles}>
        <p>Observer Pattern</p>
        <button onClick={this.handleClick}>PARENT</button>
        <Child />
      </div>
    );
  }
}

export default App;
