import React, { useState, useEffect, useDebugValue } from 'react';

// Basically, personalized hooks, extend logic from other hooks

const useSizes = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useDebugValue('FirstHook'); // --> look into React dev tools to see this tag inserted

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // Add a listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Listener SHALL be cleaned after every call
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    height
  };
};

const App = () => {
  const { height, width } = useSizes();

  return (
    <div>
      <h2>
        Width: {width}px / Height: {height}px
      </h2>
    </div>
  );
};

export default App;
