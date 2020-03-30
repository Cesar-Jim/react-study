// A parent component passes data to its children by using props,
// but how can we pass data from a child component to its parent?
// by using CUSTOM EVENTS

import React, { useState } from 'react';

const Father = () => {
  const [name, setName] = useState('from father');

  const handler = message => {
    setName(message);
  };

  return (
    <div
      style={{
        padding: '1em',
        boxSizing: 'border-box',
        borderRadius: '0.2em',
        border: '1px solid blue'
      }}
    >
      <h3>Father</h3>
      <Son onGreet={handler} />
      <p>Hello, {name}</p>
    </div>
  );
};

const Son = props => {
  const clickHandler = () => {
    props.onGreet('from Son!');
  };

  return (
    <div
      style={{
        padding: '1em',
        boxSizing: 'border-box',
        borderRadius: '0.2em',
        border: '1px solid red'
      }}
    >
      <h3>Son</h3>
      <button onClick={clickHandler}>Greet</button>
    </div>
  );
};

export default Father;
