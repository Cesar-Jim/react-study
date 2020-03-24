import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
};

const GrandChild = () => (
  <Consumer>
    {({ addClicks, clicks }) => (
      <div style={boxStyles}>
        <p>Grand Child</p>
        <button onClick={addClicks}>Clicks ({clicks})</button>
      </div>
    )}
  </Consumer>
);

class Child extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <p>Child</p>
        <GrandChild />
      </div>
    );
  }
}

class App extends Component {
  state = {
    clicks: 0
  };

  addClicks = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  };

  render() {
    return (
      <Provider
        value={{ clicks: this.state.clicks, addClicks: this.addClicks }}
      >
        <div style={boxStyles}>
          <p>React Context API</p>
          <Child />
        </div>
      </Provider>
    );
  }
}

export default App;
