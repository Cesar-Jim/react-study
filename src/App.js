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

// EVENT HANDLERS
import EventHandlerSample from './components/7-event-handlers';

// OVERRIDING FUNCTIONS
import OverridingFunctionSample from './components/8-overriding-functions';

// ASYNC FUNCTIONS
import AsyncFunctionSample from './components/9-async-functions';

// CUSTOM EVENTS (passing data from child to parent)
import CustomEvent from './components/10-custom-event';

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
      <h3>Event Handler</h3>
      <EventHandlerSample />
      <hr />
      <h3>Overriding Functions</h3>
      <OverridingFunctionSample />
      <hr />
      <h3>Async Functions</h3>
      <AsyncFunctionSample />
      <hr />
      <h3>Custom Event</h3>
      <CustomEvent />
      <hr />
    </div>
  );
};

export default App;
