import React, { useState } from 'react';

// React.memo() HOC
const Counter = React.memo(({ count }) => {
  console.log('%cRender <Counter />', 'color: blue');

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
});

const Title = React.memo(({ text }) => {
  console.log('%cRender <Title />', 'color: orangered');

  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
});

const App = () => {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  const handleInput = e => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input type='text' onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <Counter count={count} />
      <Title text={title} />
    </div>
  );
};

export default App;
