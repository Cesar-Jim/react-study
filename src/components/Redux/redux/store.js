import { createStore } from 'redux';
import rootReducer from './reducers';

// Subscribe: the function as the parameter will get executed for each triggered action
// store.subscribe(() => {
//   console.log(store.getState());
// });

// Redux methods:
// Once the store is created, some methods are available to update and store the state
// store.getState();          --> gets the current state
// store.dispatch(action);    --> triggers / dispatches actions
// store.subscribe(listener); --> subscribe to changes that might occur inside the store

// Actions:
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// setTimeout(() => {
//   store.dispatch(decrement());
// }, 2000);

// Create the store with createStore. Set the counter reducer as a parameter
// Store:
const store = createStore(rootReducer);

export default store;
