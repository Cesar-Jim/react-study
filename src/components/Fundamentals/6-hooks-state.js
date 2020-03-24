import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleAdd}> + </button>
      <button onClick={handleSubtract}> - </button>
    </div>
  );
};

export default Counter;
