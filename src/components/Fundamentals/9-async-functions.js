import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);

  const handleDecrement = () =>
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);

  return (
    <div>
      <h1>{count}</h1>

      <Button handleClick={handleIncrement}>Increment</Button>
      <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

const Button = ({ handleClick, children }) => (
  <button type='button' onClick={handleClick}>
    {children}
  </button>
);

export default Counter;
