import React from 'react';
import { connect } from 'react-redux'; // connect is a Higher-OrderComponent (HOC)
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = ({ increment, decrement, counter, name }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>{counter}</h2>
      <p>{name}</p>
    </div>
  );
};

// mapStateToProps connects our component with the store and shall return an object
// We can now consume state's information and emit actions
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    name: state.user.name,
  };
};

// mapDispatchToProps returns an object that contains the different actions or methods that we want to trigger
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // Counter is the component we want to connect
