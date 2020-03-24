import React, { Component } from 'react';

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
};

const withCounter = Comp => {
  // An anonymous class is returned
  return config => {
    return class extends Component {
      state = {
        num: config.clicks
      };

      add = () => {
        this.setState(state => ({
          num: state.num + config.sumClicks
        }));
      };

      render() {
        return <Comp num={this.state.num} add={this.add} />;
      }
    };
  };
};

class App extends Component {
  render() {
    const { num, add } = this.props;

    console.log(this.props);
    return (
      <div style={boxStyles}>
        <p>Higher Order Component</p>
        <h3>{num}</h3>
        <button onClick={add}>ADD</button>
      </div>
    );
  }
}

export default withCounter(App)({ clicks: 5, sumClicks: 5 });
