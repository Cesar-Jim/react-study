import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    setTimeout(() => {
      setCount(currentCount => currentCount + 1); // callback function inside setCount state function to access the current state
    }, 1000);

  const handleDecrement = () =>
    setTimeout(() => {
      setCount(currentCount => currentCount - 1);
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
