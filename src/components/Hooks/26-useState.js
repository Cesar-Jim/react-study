import React, { useState } from 'react';

const Counter = () => {
  /* 
  useState(0) --> returns [value, functionThatUpdatesTheState()]
  
  Without destructuring:
     const clicks = hook[0];
     const setClicks = hook[1];
  */
  const [clicks, setClicks] = useState(0);

  const addClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <button onClick={addClicks}>Clicks({clicks})</button>
    </div>
  );
};

// useState with BOOLEANS
const ActiveChecker = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <p>Click the button to {isActive ? 'deactivate' : 'activate'}</p>
      <button onClick={toggle}>{isActive ? 'Deactivate' : 'Activate'}</button>
    </div>
  );
};

// useState with OBJECTS
const AddClicksWithObject = () => {
  const [state, setState] = useState({
    clicks: 0,
    title: ''
  });

  const merge = nextState => {
    setState({
      ...state,
      ...nextState
    });
  };

  const addClicks = () => {
    merge({
      clicks: state.clicks + 1
    });
  };

  const handleInput = e => {
    const title = e.target.value;

    merge({
      title
    });
  };

  return (
    <div>
      <input type='text' onChange={handleInput} value={state.value} />
      <button onClick={addClicks}>Clicks({state.clicks})</button>
      <h5>{state.title}</h5>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <span>A counter with hooks (number):</span>
      <Counter />
      <br />
      <span>A status toggler with hooks (boolean):</span>
      <ActiveChecker />
      <br />
      <span>A counter with hooks (object):</span>
      <AddClicksWithObject />
    </div>
  );
};

export default App;
