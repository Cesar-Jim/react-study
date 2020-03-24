import React, { useState, useEffect } from 'react';

const UseEffectClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // componentDidMount() for the first rendering
    // componentDidUpdate() for subsequent renderings
    console.log('inside useEffect', clicks);
    console.log('%c----------------------------------', 'color: green');

    return () => {
      // componentWillUnmount()
      console.log('return of useEffect', clicks); // the returning function gets executed before
    };
  });

  const add = () => setClicks(clicks + 1);

  return (
    <div>
      <button onClick={add}>Clicks({clicks})</button>
    </div>
  );
};

const MouseMoveComponent = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMove = e => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  });

  return (
    <div>
      <h4>
        X: {mouseX} | Y: {mouseY}
      </h4>
    </div>
  );
};

const NumAdditionComponent = () => {
  const [num, setNum] = useState(0);
  const [emoji, setEmoji] = useState('🤧');

  useEffect(() => {
    alert('useEffect 🙌🏻');
  }, [num]);

  const addNum = () => setNum(num + 1);

  const toggleEmoji = () => {
    const nextEmoji = emoji === '🤧' ? '😊' : '🤧';

    setEmoji(nextEmoji);
  };

  return (
    <div>
      <button onClick={addNum}>ADD ({num})</button>
      <button onClick={toggleEmoji}>Toggle Emoji</button>
      <h2>{emoji}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UseEffectClickCounter />
      <MouseMoveComponent />
      <NumAdditionComponent />
    </div>
  );
};

export default App;
