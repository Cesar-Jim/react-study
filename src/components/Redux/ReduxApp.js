import React from 'react';

// React-Redux
import { Provider } from 'react-redux'; // provides the access to the store from anywhere inside the application

import store from './redux/store';

import Counter from './components/Counter';
import Info from './components/Info';

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <div>
        <Info />
        <Counter />
      </div>
    </Provider>
  );
};

export default ReduxApp;
