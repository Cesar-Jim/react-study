import React, { useState } from 'react';

// JSX
import JSXSample from './components/Fundamentals/1-jsx';

// FUNCTIONAL COMPONENTS
import FunctionalComponentSample from './components/Fundamentals/2-functional-component';

// PROPS
import PropsSample from './components/Fundamentals/3-props';

// STATE
import ClassStateSample from './components/Fundamentals/4-class-state';
import PropertyInitializerStateSample from './components/Fundamentals/5-property-initializer-state';
import HooksStateSample from './components/Fundamentals/6-hooks-state';

// EVENT HANDLERS
import EventHandlerSample from './components/Fundamentals/7-event-handlers';

// OVERRIDING FUNCTIONS
import OverridingFunctionSample from './components/Fundamentals/8-overriding-functions';

// ASYNC FUNCTIONS
import AsyncFunctionSample from './components/Fundamentals/9-async-functions';

// CUSTOM EVENTS (passing data from child to parent)
import CustomEventSample from './components/Fundamentals/10-custom-event';

// PROPS.CHILDREN
import PropsChildrenSample from './components/Fundamentals/11-children-prop';

// PORTALS (MODAL EXAMPLE)
import PortalModalSample from './components/Fundamentals/12-portals';

// OBJECT ITERATION
import ObjectIteration from './components/Fundamentals/13-object-iteration';

// REFS
import RefsSample from './components/Fundamentals/14-refs';

// API CALL USING FETCH
import ApiCallFetchSample from './components/Fundamentals/15-rest-api-call-fetch';

// API CALL USING AXIOS
//import ApiCallAxiosSample from './components/16-rest-api-call-axios';

// PURE COMPONENT
import PureComponentSample from './components/Fundamentals/18-pure-component';

// EVENT BUBBLING
import EventBubblingSample from './components/Fundamentals/19-event-bubbling';

// PARENT COMPONENT
import ParentComponentSample from './components/Patterns/20-parent-component';

// OBSERVER PATTERN
import ObserverPatternSample from './components/Patterns/21-observer-pattern';

// REACT CONTEXT API
import ContextAPISample from './components/Patterns/22-react-context-pattern';

// RENDER PROPS PATTERN
import RenderPropsSample from './components/Patterns/23-render-props-pattern';

// HIGHER ORDER COMPONENT PATTERN
import HOCPattern from './components/Patterns/24-higher-order-components-pattern';

// IMPLICIT COMPOSITION EXAMPLE
import ImplicitCompositionExample from './components/Composition/Composition';

const App = () => {
  // Begins block for PORTALS example
  let [visible, setVisible] = useState(false);

  const show = () => {
    setVisible((visible = true));
  };
  const hide = () => {
    setVisible((visible = false));
  };
  // Ends block for PORTALS example

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
      <CustomEventSample />
      <hr />
      <h3>Props.Children</h3>
      <PropsChildrenSample>
        <nav>
          <a href='https://www.google.com'> Home | </a>
          <a href='https://www.google.com'> About Us | </a>
          <a href='https://www.google.com'> Contact </a>
          <p>
            Check the console to see what types of children are contained in
            this component
          </p>
          <h3>Lorem ipsum dolor sit</h3>
        </nav>
      </PropsChildrenSample>
      <hr />
      <h3>Portals</h3>
      <PortalModalSample visible={visible}>
        <h1>
          Hello from a PORTAL!{' '}
          <span role='img' aria-label='Emoji'>
            👋🏻
          </span>
        </h1>
      </PortalModalSample>
      <div>
        <button onClick={show}>Show Modal</button>
        <button onClick={hide}>Hide Modal</button>
      </div>
      <hr />
      <h3>Object Iteration</h3>
      <ObjectIteration />
      <hr />
      <h3>Refs (using hooks (useRef))</h3>
      <RefsSample />
      <h3>API Call Using Fetch</h3>
      <ApiCallFetchSample />
      <hr />
      {/*<h3>API Call Using Axios</h3>
      <ApiCallAxiosSample />
      <hr />*/}
      <h3>Pure Component Using memo</h3>
      <PureComponentSample />
      <hr />
      <h3>Event Bubbling (anti-pattern & not good practice)</h3>
      <EventBubblingSample />
      <hr />
      <h3>Parent Component Pattern (Communication between siblings)</h3>
      <ParentComponentSample />
      <hr />
      <h3>Observer Pattern (Using the library "pubsub-js")</h3>
      <ObserverPatternSample />
      <hr />
      <h3>Context API</h3>
      <ContextAPISample />
      <hr />
      <h3>Render Props Pattern</h3>
      <RenderPropsSample />
      <hr />
      <h3>Higher Order Components</h3>
      <HOCPattern />
      <hr />
      <h3>Implicit Composition</h3>
      <ImplicitCompositionExample />
      <hr />
    </div>
  );
};

export default App;
