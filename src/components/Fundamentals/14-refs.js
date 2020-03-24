import React, { useRef } from 'react';

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);

  const onFocusClick = () => {
    // 'current' points to the mounted text input element
    inputEl.current.focus();
  };
  const onBlurClick = () => {
    // 'current' points to the mounted text input element
    inputEl.current.blur();
  };

  return (
    <div>
      <input ref={inputEl} type='text' />
      <button onClick={onFocusClick}>Focus the input</button>
      <button onClick={onBlurClick}>Blurs the input</button>
    </div>
  );
};

export default TextInputWithFocusButton;
