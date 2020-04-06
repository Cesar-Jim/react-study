import { INCREMENT, DECREMENT } from '../actions/counterActions';

const initialState = 0;

// Reducer functions inside Redux receive 2 parameters: the current state (initial value) & a given action
// Reducer: is a PURE FUNCTION that return the current state
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default counter;
