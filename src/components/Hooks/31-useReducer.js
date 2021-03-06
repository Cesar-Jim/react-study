import React, { useReducer } from 'react';

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1
        };

      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1
        };

      case 'SET_TITLE':
        return {
          ...state,
          title: action.title
        };

      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
    title: 'Hello'
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleTitle = e => {
    dispatch({ type: 'SET_TITLE', title: e.target.value });
  };

  return (
    <div>
      <input type='text' onChange={handleTitle} value={state.title} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h3>
        {state.count} - {state.title}
      </h3>
    </div>
  );
};

export default App;
