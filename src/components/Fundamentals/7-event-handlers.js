import React, { useState } from 'react';

const Message = () => {
  const [msg, setMsg] = useState(''); // manage state using the useState hook

  const handleTextChange = e => setMsg(e.target.value);

  return (
    <div>
      <label htmlFor='type-something'>Type Something: </label>
      <input
        type='text'
        name='type-something'
        value={msg}
        onChange={handleTextChange}
      />
      <p>{msg}</p>
    </div>
  );
};

export default Message;
