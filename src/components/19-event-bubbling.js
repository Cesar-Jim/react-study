import React from 'react';

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
};

const Header = () => {
  return (
    <div style={boxStyles}>
      <p>( Hijo a Padre )</p>
      <p>
        <strong>Event Bubbling</strong>
      </p>
      <p>( See message in the console... )</p>
    </div>
  );
};

const Child = () => {
  const handleClick = e => {
    //e.stopPropagation();
    e.greeting = 'Hello from the Child Component!';

    console.log('Click in <Child />');
  };

  return (
    <div style={boxStyles} onClick={handleClick}>
      <p>Child</p>
      <p>( See message in the console... )</p>
    </div>
  );
};

const Father = () => {
  const handleClick = e => {
    console.log('Click in <Father />', e.greeting);
  };

  return (
    <div style={boxStyles} onClick={handleClick}>
      <Header />
      <Child />
    </div>
  );
};

export default Father;
