// Constant names for actions
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creators: are functions that return the OBJECT of the action
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
