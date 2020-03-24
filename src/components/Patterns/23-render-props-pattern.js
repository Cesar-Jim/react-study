import React, { Component } from 'react';

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
};

class List extends Component {
  render() {
    const { list, render } = this.props;

    return (
      <div>
        {list.map((item, index) => {
          if (render) {
            return render(item);
          }

          return <li key={item.name}>{item.name}</li>;
        })}
      </div>
    );
  }
}

class App extends Component {
  state = {
    fruits: [
      { name: 'Strawberry', price: 22 },
      { name: 'Mango', price: 32 },
      { name: 'Watermelon', price: 15 },
      { name: 'Apple', price: 3 }
    ]
  };

  render() {
    const { fruits } = this.state;

    return (
      <div style={boxStyles}>
        <p>Render Props</p>
        <List list={fruits} />
      </div>
    );
  }
}

export default App;
