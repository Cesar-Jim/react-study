import React from 'react';

// Components imports
import JSXSample from './components/1-jsx';
import FunctionalComponentSample from './components/2-functional-component';

const App = () => {
  return (
    <div>
      <h1>- REACT STUDY -</h1>
      <hr />
      <h3>JSX</h3>
      <JSXSample />
      <hr />
      <h3>Functional Component</h3>
      <FunctionalComponentSample />
    </div>
  );
};

export default App;
