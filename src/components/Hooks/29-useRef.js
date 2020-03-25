import React, { useRef } from 'react';

const App = () => {
  const entry = useRef();

  const focus = () => entry.current.focus();
  const blur = () => entry.current.blur();

  return (
    <div>
      <input type='text' placeholder='Type a text' ref={entry} />
      <button onClick={focus}>Focus</button>
      <button onClick={blur}>Blur</button>
    </div>
  );
};

export default App;
