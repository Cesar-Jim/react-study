import React from 'react';

// JSX
import JSXSample from './components/1-jsx';

// FUNCTIONAL COMPONENTS
import FunctionalComponentSample from './components/2-functional-component';

// PROPS
import PropsSample from './components/3-props';

// STATE
import ClassStateSample from './components/4-class-state';
import PropertyInitializerStateSample from './components/5-property-initializer-state';
import HooksStateSample from './components/6-hooks-state';

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
      <hr />
      <h3>Props</h3>
      <PropsSample />
      <hr />
      <h3>State With Classes</h3>
      <ClassStateSample />
      <hr />
      <h3>State With Property Initializers</h3>
      <PropertyInitializerStateSample />
      <hr />
      <h3>State With Hooks</h3>
      <HooksStateSample />
      <hr />
    </div>
  );
};

export default App;
