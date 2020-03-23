import React, { useState } from 'react';

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
};

const blueStyles = {
  ...boxStyles,
  border: '1px solid blue'
};
const redStyles = {
  ...boxStyles,
  border: '1px solid red'
};

const ComponentA = props => {
  const { num } = props;

  return (
    <div style={blueStyles}>
      <button onClick={props.onAdd}>Component A ({num})</button>
    </div>
  );
};

const ComponentB = props => {
  const { num } = props;

  return (
    <div style={redStyles}>
      <button onClick={props.onAdd}>Component B ({num})</button>
    </div>
  );
};

const Father = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const handleAddA = () => {
    setCountA(countA + 1);
  };

  const handleAddB = () => {
    setCountB(countB + 2);
  };

  return (
    <div style={boxStyles}>
      <p>Parent Component</p>
      <p>( Siblings Communication)</p>
      <ComponentA num={countA} onAdd={handleAddB} />
      <ComponentB num={countB} onAdd={handleAddA} />
    </div>
  );
};

export default Father;
