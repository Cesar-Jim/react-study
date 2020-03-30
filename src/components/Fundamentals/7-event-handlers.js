import React, { useState } from 'react';

const Message = () => {
  const [msg, setMsg] = useState(''); // manage state using the useState hook
  const [color, setColor] = useState('blue');

  const handleTextChange = e => setMsg(e.target.value);
  const handleClick = () => setColor('red');

  return (
    <div>
      <label htmlFor='type-something'>Type Something: </label>
      <input
        type='text'
        name='type-something'
        value={msg}
        onChange={handleTextChange}
        onClick={handleClick}
      />
      <p>Click the input to change de color of the line down below to red</p>
      <p style={{ color: `${color}` }}>{msg}</p>
    </div>
  );
};

export default Message;
